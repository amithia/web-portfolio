const client_id     = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return res.json();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { access_token } = await getAccessToken();

  const current = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  // Nothing playing
  if (current.status === 204 || current.status > 400) {
    const recent = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const recentData = await recent.json();
    const track = recentData.items?.[0]?.track;
    if (!track) return res.json({ isPlaying: false, track: null });
    return res.json({
      isPlaying: false,
      title: track.name,
      artist: track.artists.map(a => a.name).join(', '),
      album: track.album.name,
      albumArt: track.album.images?.[1]?.url,
      songUrl: track.external_urls.spotify,
    });
  }

  const data = await current.json();
  const track = data.item;

  return res.json({
    isPlaying: true,
    title: track.name,
    artist: track.artists.map(a => a.name).join(', '),
    album: track.album.name,
    albumArt: track.album.images?.[1]?.url,
    songUrl: track.external_urls.spotify,
  });
}
