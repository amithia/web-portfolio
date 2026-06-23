const KV_URL   = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

async function kvFetch(path, opts = {}) {
  const res = await fetch(`${KV_URL}${path}`, {
    ...opts,
    headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json', ...opts.headers },
  });
  return res.json();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET /api/votes — return all vote counts
  if (req.method === 'GET') {
    const data = await kvFetch('/hgetall/votes');
    return res.json(data.result ? Object.fromEntries(
      Object.entries(data.result).map(([k, v]) => [k, parseInt(v, 10)])
    ) : {});
  }

  // POST /api/votes — { slug, action: 'up' | 'down' }
  if (req.method === 'POST') {
    const { slug, action } = req.body || {};
    if (!slug || !['up', 'down'].includes(action)) {
      return res.status(400).json({ error: 'Invalid payload' });
    }
    const delta = action === 'up' ? 1 : -1;
    const data  = await kvFetch(`/hincrby/votes/${slug}/${delta}`);
    const count = Math.max(0, data.result ?? 0);
    // Clamp to 0 if we went negative
    if (count === 0 && data.result < 0) {
      await kvFetch(`/hset/votes/${slug}/0`);
    }
    return res.json({ slug, count });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
