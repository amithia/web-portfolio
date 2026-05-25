/* global window */
/* ─────────────────────────────────────────────────────────
   Shared data — loaded as a plain <script> on every page.
   window.PROJECTS  window.PRACTICES  window.READING
   slug = URL-safe id used as ?id=… in detail URLs.
   ───────────────────────────────────────────────────────── */

window.PROJECTS = [
  {
    id: 1, slug: 'ion-studio',
    cat: 'Start-up · AI Integration',
    title: 'Ion <em>Studio</em>',
    teaser: 'A mobile AI studio helping app teams ship intelligent features — without rebuilding from scratch.',
    tone: 'cherry', label: 'FEATURED', meta: 'Founder · 2024–present',
    category: 'startup', featured: true, glyph: 'flame', stickers: 'ion',
    year: 2024, role: 'Co-founder',
    client: 'Self-initiated → B2B clients', duration: 'Ongoing',
    lede: 'Ion Studio bridges the gap between mobile apps and AI — helping teams integrate intelligent features without rebuilding their entire product.',
    sections: [
      { kind: 'block', tag: 'Origin', title: 'The gap nobody was filling.', body: 'Most app teams know AI could transform their product. What they lack is a clear path from "we should add AI" to a shipped feature that actually helps users. Agency work is too slow; hiring AI specialists is too expensive; and most consultants hand over a deck, not working code. Ion Studio was built for that gap — rapid AI integration that fits inside an existing team\'s sprint.' },
      { kind: 'block', tag: 'Approach', title: 'Audit, prototype, hand off.', body: 'We run a structured three-phase process: first, a focused audit of the existing app to identify the 3–5 moments where AI creates genuine value, not just novelty; second, a working prototype the client team can test with real users; third, integration-ready specs and support through the first AI feature ship. The process is designed to leave teams capable of extending AI themselves — not dependent on us.' },
      { kind: 'metrics', items: [
        { num: '2', label: 'Products shipping under Ion Studio' },
        { num: '3', label: 'Avg weeks from audit to prototype' },
        { num: '100%', label: 'Client retention to date' },
        { num: '2', label: 'Co-founders building this' },
      ] },
      { kind: 'pull', text: 'The best AI integration is the one users don\'t notice — they just think the app got smarter.' },
    ],
  },
  {
    id: 2, slug: 'wheeltodo',
    cat: 'UI/UX · Mobile App',
    title: 'Wheel<em>ToDo</em>',
    teaser: 'A task and route-planning app designed for wheelchair users — accessibility as the starting point, not an afterthought.',
    tone: 'lilac', label: 'APP', meta: 'UI/UX · 2025',
    category: 'ux', glyph: 'heart', stickers: 'wheel',
    year: 2025, role: 'Lead designer & developer',
    client: 'Ion Studio', duration: '4 months',
    lede: 'Most task apps treat accessibility as a setting. WheelToDo starts there.',
    sections: [
      { kind: 'block', tag: 'Problem', title: 'Accessibility bolted on is accessibility broken.', body: 'Existing to-do and route apps offer accessibility as add-ons — larger text, voice control — but the core experience wasn\'t built for users navigating the world in a wheelchair. WheelToDo starts from a different premise: what if the primary user manages tasks one-handed, needs route elevation data, and wants to know if a "10-minute walk" is actually accessible for them?' },
      { kind: 'block', tag: 'Approach', title: 'Design with, not for.', body: 'We ran six co-design sessions with wheelchair users in Canberra and online. Every interaction model was tested with one-handed use as the default. The route planner integrates elevation and surface-quality data so users can trust what "accessible route" means. We removed features that didn\'t survive contact with real users — including a gesture system that only worked well for people with full hand mobility.' },
      { kind: 'metrics', items: [
        { num: '6', label: 'Co-design sessions' },
        { num: '1-hand', label: 'Default interaction model' },
        { num: '92%', label: 'Task completion rate (usability testing)' },
        { num: '3.8s', label: 'Avg time to add a task' },
      ] },
      { kind: 'block', tag: 'Outcome', title: 'A small app with outsized usefulness.', body: 'WheelToDo launched in beta with users from the co-design sessions. The most-used feature isn\'t the route planner — it\'s shared task lists, which users adapted for grocery runs, hospital appointments, and everything in between. The app is growing by word of mouth within the disability community, which is the only growth signal we care about.' },
    ],
  },
  {
    id: 3, slug: 'cribd',
    cat: 'UI/UX · Start-up',
    title: 'Cribd<em>.</em>',
    teaser: 'A student accommodation platform connecting renters with verified short-stay housing — from uni project to real product.',
    tone: 'bubble', label: 'UX', meta: 'UI/UX · Product · 2023–2024',
    category: 'ux', glyph: 'home', stickers: 'cribd',
    year: 2023, role: 'Lead designer & co-founder',
    client: 'University project → Ion Studio', duration: '12 months',
    lede: 'Cribd. started as a university brief and became something a small team actually wanted to build.',
    sections: [
      { kind: 'block', tag: 'Origin', title: 'A real problem, lived personally.', body: 'Finding student accommodation in Canberra is genuinely difficult — the market is thin, verification is inconsistent, and short-stay options for semester exchanges barely exist. Cribd. was born from that frustration. What started as a university assignment became a product worth continuing: a two-sided marketplace that puts trust at the centre.' },
      { kind: 'block', tag: 'Design', title: 'Trust is the product.', body: 'The hardest design problem in a student accommodation marketplace isn\'t the search UX — it\'s trust. We designed a lightweight verification flow that feels like onboarding rather than a security checkpoint, and a listing format that surfaces what students actually need (campus proximity, lease flexibility, who else is in the property) before showing price.' },
      { kind: 'metrics', items: [
        { num: '120+', label: 'Beta users in first semester' },
        { num: '4.4★', label: 'Average listing trust score' },
        { num: '2', label: 'Research rounds before first pixel' },
        { num: '1', label: 'University award for the concept' },
      ] },
      { kind: 'pull', text: 'The trust flow isn\'t a gate. It\'s the product. Design it like it matters.' },
    ],
  },
  {
    id: 4, slug: 'leftover-app',
    cat: 'UI/UX · Social Impact',
    title: 'The Leftover <em>App</em>',
    teaser: 'A food surplus platform connecting cafes with nearby people — a university capstone built for real communities.',
    tone: 'moss', label: 'UNI', meta: 'UI/UX · 2023',
    category: 'ux', glyph: 'flower', stickers: 'leftover',
    year: 2023, role: 'Lead designer & researcher',
    client: 'ANU capstone project', duration: '6 months',
    lede: 'A food surplus app that actually got used — because the people who needed it helped design it.',
    sections: [
      { kind: 'block', tag: 'Problem', title: 'Food waste is a design problem.', body: 'Every day, cafes and households in Canberra discard food that nearby people would eat. The barrier isn\'t willingness — it\'s coordination. Existing solutions require too much planning, don\'t fit into the end-of-day rush at a cafe, and put the burden on the people with the least time: the staff closing up at 5pm.' },
      { kind: 'block', tag: 'Approach', title: 'The listing takes 60 seconds.', body: 'We tested six listing flows with cafe staff at the end of real services. Everything over 60 seconds was abandoned. The final flow has three fields, a pre-filled time window, and a share button. On the receiver side, we built around "on my way home" — proximity-first, no planning required. Both sides were designed to work with the grain of existing behaviour, not against it.' },
      { kind: 'metrics', items: [
        { num: '3', label: 'Fields in the final listing flow' },
        { num: '60s', label: 'Maximum listing time (design target)' },
        { num: '8', label: 'Cafe partners in pilot' },
        { num: '340', label: 'Meals matched in pilot semester' },
      ] },
    ],
  },
  {
    id: 5, slug: 'explore-your-campus',
    cat: 'UI/UX · Web',
    title: 'Explore Your <em>Campus</em>',
    teaser: 'An interactive web guide for new ANU students — built during my role as Web Project Officer.',
    tone: 'cherry', label: 'WEB', meta: 'UI/UX · Web · 2024',
    category: 'ux', glyph: 'pin', stickers: 'campus',
    year: 2024, role: 'Web Project Officer, ANU',
    client: 'Australian National University', duration: '3 months',
    lede: 'New students don\'t need a map. They need to know where to go on a bad day.',
    sections: [
      { kind: 'block', tag: 'Brief', title: 'The campus map problem.', body: 'ANU is a large campus that can feel overwhelming — especially for international students arriving in a new country. The existing wayfinding was a static PDF and a Buildings & Grounds page nobody opened. We were asked to build something better. The brief was loose, which turned out to be a gift.' },
      { kind: 'block', tag: 'Insight', title: 'They don\'t want a tour. They want to feel ready.', body: 'Early user interviews revealed that new students don\'t primarily need navigation — they need orientation. They need to know where to go when they\'re overwhelmed, lost, or hungry at 6pm. We restructured the experience around moments ("First week", "Late night", "When you\'re stuck") rather than categories ("Admin", "Academic", "Recreation").' },
      { kind: 'metrics', items: [
        { num: '4k+', label: 'Sessions in first semester' },
        { num: '3', label: 'User interview rounds' },
        { num: '78%', label: 'Students who found it genuinely useful' },
        { num: '1', label: 'PDF map replaced' },
      ] },
      { kind: 'block', tag: 'Outcome', title: 'Moment-based navigation.', body: 'The final experience is structured around eight "moments" rather than a category taxonomy. Each moment surfaces the three most relevant places on campus, with short context — not an address, but "the cafe open when the library closes." Student feedback collected at Orientation and mid-semester showed significant improvement over the baseline year.' },
    ],
  },
  {
    id: 6, slug: 'ab-testing-calculator',
    cat: 'Data & Analytics',
    title: 'A/B Testing <em>Calculator</em>',
    teaser: 'A clean statistical significance tool built because every existing one required a stats degree to interpret.',
    tone: 'ink', label: 'TOOL', meta: 'Data · Personal · 2025',
    category: 'data', glyph: 'star', stickers: 'abtest',
    year: 2025, role: 'Designer & developer',
    client: 'Self-initiated', duration: '3 weeks',
    lede: 'Every A/B testing tool I found either gave me a number or gave me a lecture. I wanted something in between.',
    sections: [
      { kind: 'block', tag: 'Problem', title: 'Statistical significance is a communication problem.', body: 'Most A/B testing calculators either output a raw p-value (which non-statisticians misread) or hide the maths and return a green/red result (which creates false confidence). The gap between "technically significant" and "worth acting on" is where most bad decisions happen — and no tool was bridging it honestly.' },
      { kind: 'block', tag: 'Approach', title: 'Show the interpretation, not just the number.', body: 'The calculator outputs three layers: the statistical result, a plain-language interpretation calibrated to sample size and effect magnitude, and a "minimum detectable effect" panel showing what the test actually had the power to detect. The goal was to make results honest and actionable, not just fast.' },
      { kind: 'metrics', items: [
        { num: '<2s', label: 'Time to result' },
        { num: '3', label: 'Output layers (result · interpretation · context)' },
        { num: '100%', label: 'Client-side — no data sent anywhere' },
        { num: '1', label: 'Reason to build it: I needed it' },
      ] },
    ],
  },
];

window.PRACTICES = [
  {
    slug: 'ux-product-design',
    tone: 'cherry', tag: 'PRACTICE 01',
    title: 'UX & Product Design',
    short: 'Research, prototyping, and interface design for mobile and web — from first interview to final handoff.',
    tools: 'Figma · React Native · Notion',
    lede: 'Most of the work is not the artefact. It\'s sitting in the room before there is one.',
    body: 'I lead user research, information architecture, interaction design, and design-system work — usually for mobile-first products and web experiences. I take work from discovery through to engineering handoff, and I stay around for the messy bit after launch when things actually start to behave like a product.',
    methods: [
      { name: 'User research', detail: 'In-context observation, co-design sessions, jobs-to-be-done interviews.' },
      { name: 'Information architecture', detail: 'Card-sorting, tree-testing, taxonomy work for content-heavy products.' },
      { name: 'Interaction prototyping', detail: 'High-fidelity prototypes that survive contact with engineering.' },
      { name: 'Accessibility-first design', detail: 'Designing for the hardest use cases first — everything else gets easier.' },
    ],
    relatedProjectIds: [2, 4],
  },
  {
    slug: 'ai-integration',
    tone: 'bubblegum', tag: 'PRACTICE 02',
    title: 'AI Integration',
    short: 'Helping mobile and web teams ship real AI features — through rapid audits, prototypes, and integration support.',
    tools: 'Claude API · Python · React Native',
    lede: 'The best AI feature is the one that disappears into the product.',
    body: 'I work with app teams — usually through Ion Studio — to identify where AI creates genuine value (not novelty), prototype rapidly, and hand off specs the team can actually ship. I\'m especially interested in AI that works quietly: features users rely on without thinking of them as "AI."',
    methods: [
      { name: 'AI opportunity audits', detail: 'Structured review of existing apps to find 3–5 AI integration moments.' },
      { name: 'Rapid prototyping', detail: 'Working AI prototypes in weeks, not quarters.' },
      { name: 'Integration handoff', detail: 'Specs and support through the first AI feature ship.' },
      { name: 'Responsible integration', detail: 'Building in transparency, fallbacks, and honest capability boundaries.' },
    ],
    relatedProjectIds: [1, 2],
  },
  {
    slug: 'data-analytics',
    tone: 'lilac', tag: 'PRACTICE 03',
    title: 'Data & Analytics',
    short: 'Analysis, dashboards, and statistical tools that help teams make better decisions — not just prettier charts.',
    tools: 'Python · SQL · Tableau',
    lede: 'A chart is a paragraph. If it doesn\'t earn its place, cut it.',
    body: 'I build data tools and analysis that serve an actual decision, not a metric inventory. My approach is audience-first: what the CEO needs to see is different from what the product team needs to act on. I\'m especially careful about what the data can and can\'t honestly say.',
    methods: [
      { name: 'Statistical analysis', detail: 'A/B testing, significance testing, regression — with honest interpretation.' },
      { name: 'Decision dashboards', detail: 'Dashboards built around a specific decision, not a data dump.' },
      { name: 'Data tooling', detail: 'Custom calculators and tools when nothing off-the-shelf is honest enough.' },
      { name: 'Audience-first framing', detail: 'Different outputs for the board, the team, and the curious generalist.' },
    ],
    relatedProjectIds: [6],
  },
  {
    slug: 'web-development',
    tone: 'moss', tag: 'PRACTICE 04',
    title: 'Web Development',
    short: 'Building web experiences — from interactive campus guides to SharePoint infrastructure at ANU.',
    tools: 'React · JavaScript · SharePoint',
    lede: 'The web should work for everyone on the first visit.',
    body: 'I build web products and internal platforms — from public-facing interactive experiences to organisational SharePoint infrastructure. My work at ANU as Web Project Officer covered both ends: public student-facing products and the internal systems that keep things running.',
    methods: [
      { name: 'Interactive experiences', detail: 'Web-based guides, explorers, and tools for public audiences.' },
      { name: 'SharePoint development', detail: 'Internal platforms, intranet design, and process automation.' },
      { name: 'React development', detail: 'Component-based UIs — including this portfolio.' },
      { name: 'Performance & accessibility', detail: 'Fast, accessible experiences that work on the first visit, not just in Figma.' },
    ],
    relatedProjectIds: [5, 3],
  },
];

window.UPCOMING = [
  {
    id: 'u1', slug: 'villain-predictor',
    title: 'Villain <em>Predictor</em>',
    cat: 'Data · NLP',
    teaser: 'Document analysis tool that identifies villain archetypes in narrative text — entity recognition, sentiment patterns, and story structure analysis.',
    tone: 'ink', status: 'planned', category: 'data', glyph: 'star',
    lede: 'Can an NLP model identify a villain before the plot formally introduces one? That\'s the question driving this.',
    role: 'Solo project', year: 2026,
    sections: [
      { kind: 'block', tag: 'Concept', title: 'Villainy as a data problem.', body: 'Every compelling villain follows structural patterns — a power imbalance, a moment of choice, an escalating arc. This project treats those patterns as extractable features. The goal is a document analysis tool that identifies villain archetypes using named entity recognition, sentiment trajectory analysis, and narrative arc markers. Not labelling characters good or evil, but surfacing the signals authors use to prime readers.' },
      { kind: 'block', tag: 'Approach', title: 'What the text signals before the reader knows.', body: 'Authors signal villainy well before the reveal — through linguistic framing, sentiment shifts around a character, and the sequence of actions they\'re associated with. Early experiments on classic texts show consistent structural patterns: sentiment collapse around a named entity typically precedes the plot\'s formal villain declaration by several chapters. The tool is designed to surface these patterns, not make moral judgements.' },
      { kind: 'metrics', items: [
        { num: 'NLP', label: 'Core technique' },
        { num: '3', label: 'Archetype patterns identified in early testing' },
        { num: 'Concept', label: 'Current stage' },
        { num: '~2026', label: 'Expected first version' },
      ] },
      { kind: 'block', tag: 'Why', title: 'Part analytical tool, part creative toy.', body: 'The practical use case is literary content analysis — useful for editors, researchers, and narrative teams who want structured insight into how their stories signal character intent. But honestly, this started because I wanted to know whether a model could identify Iago as trouble from Act I\'s language alone, before any action confirmed it. That question is still the one driving the work.' },
    ],
  },
  {
    id: 'u2', slug: 'anu-course-recommender',
    title: 'ANU Course <em>Recommender</em>',
    cat: 'Data · EdTech',
    teaser: 'A personalised course recommendation system for ANU students — using academic history, career goals, and enrolment patterns to surface the right next step.',
    tone: 'moss', status: 'planned', category: 'data', glyph: 'globe',
  },
  {
    id: 'u3', slug: 'coffee-stamp-tracker',
    title: 'Coffee Stamp <em>Tracker</em>',
    cat: 'UI/UX · Mobile',
    teaser: 'A digital loyalty stamp app for independent coffee shops — lightweight, no vendor lock-in, works without installing anything on the customer\'s phone.',
    tone: 'cherry', status: 'planned', category: 'ux', glyph: 'heart',
  },
  {
    id: 'u4', slug: 'financial-time-machine',
    title: 'Financial Time <em>Machine</em>',
    cat: 'Data · Personal Finance',
    teaser: 'Visualise how financial decisions made in the past would play out with today\'s information — and what that tells you about the choices you\'re making now.',
    tone: 'lilac', status: 'planned', category: 'data', glyph: 'star',
  },
  {
    id: 'u5', slug: 'music-chatbot',
    title: 'Music Recommendation <em>Chatbot</em>',
    cat: 'AI · Music',
    teaser: 'A conversational music recommender that asks what you\'re in the mood for, not what you\'ve listened to — built on Claude API with real music data.',
    tone: 'bubble', status: 'planned', category: 'data', glyph: 'flower',
  },
  {
    id: 'u6', slug: 'sentiment-analysis-tool',
    title: 'Sentiment Analysis <em>Tool</em>',
    cat: 'Data · NLP',
    teaser: 'A clean interface for sentiment analysis — designed for non-technical stakeholders who need to understand what their customers feel, not just a score.',
    tone: 'cherry', status: 'planned', category: 'data', glyph: 'heart',
  },
  {
    id: 'u7', slug: 'revamp-stories',
    title: '<em>Stories</em> Revamp',
    cat: 'UI/UX · Web',
    teaser: 'A redesign of the ANU Stories content platform — better editorial layout, improved discoverability, and a CMS experience that doesn\'t require a manual.',
    tone: 'ink', status: 'planned', category: 'ux', glyph: 'pin',
  },
  {
    id: 'u8', slug: 'real-estate-prediction',
    title: 'Real Estate Price <em>Prediction</em>',
    cat: 'Data · Machine Learning',
    teaser: 'ML model for Canberra property prices — with a dashboard that explains the prediction and what drove it, not just the number.',
    tone: 'moss', status: 'planned', category: 'data', glyph: 'pin',
  },
  {
    id: 'u9', slug: 'customer-churn',
    title: 'Customer Churn <em>Model</em>',
    cat: 'Data · Machine Learning',
    teaser: 'Predicting customer churn before it happens — and designing the intervention alongside the model, not as an afterthought.',
    tone: 'lilac', status: 'planned', category: 'data', glyph: 'globe',
  },
  {
    id: 'u10', slug: 'personalised-resume-generator',
    title: 'Resume <em>Generator</em>',
    cat: 'AI · Productivity',
    teaser: 'AI-powered resume tailoring to a specific job description — with transparent output about what changed and why, so you stay in control.',
    tone: 'cherry', status: 'planned', category: 'data', glyph: 'flame',
  },
  {
    id: 'u11', slug: 'sound-emotion-visualiser',
    title: 'Sound to Emotion <em>Visualiser</em>',
    cat: 'Creative · Data',
    teaser: 'Real-time audio analysis mapped to emotion and rendered as live visuals — a creative tool at the intersection of music, data, and feeling.',
    tone: 'bubble', status: 'planned', category: 'data', glyph: 'flower',
  },
  {
    id: 'u12', slug: 'stock-price-dashboard',
    title: 'Stock Price <em>Dashboard</em>',
    cat: 'Data · Finance',
    teaser: 'A stock prediction dashboard that surfaces uncertainty as prominently as the forecast — because the confidence interval is the most useful part.',
    tone: 'moss', status: 'planned', category: 'data', glyph: 'star',
  },
];

window.COURSES = [
  { id: 'google-ux',       provider: 'Google',           title: 'UX Design Certificate',                  status: 'in-progress', progress: 40, category: 'ux',    description: 'Research, wireframing, prototyping, and design systems fundamentals.' },
  { id: 'google-data',     provider: 'Google',           title: 'Data Analytics Certificate',              status: 'planned',     progress: 0,  category: 'data',  description: 'Data analysis, SQL, R programming, and Tableau.' },
  { id: 'anthropic-cc101', provider: 'Anthropic',        title: 'Claude Code 101',                         status: 'planned',     progress: 0,  category: 'ai',    description: 'Getting started with Claude Code for AI-assisted development.' },
  { id: 'anthropic-api',   provider: 'Anthropic',        title: 'Building with Claude API',                status: 'planned',     progress: 0,  category: 'ai',    description: 'Integrating Claude into applications using the Anthropic API.' },
  { id: 'anthropic-mcp',   provider: 'Anthropic',        title: 'Introduction to Model Context Protocol',  status: 'planned',     progress: 0,  category: 'ai',    description: 'Understanding and implementing MCP for Claude integrations.' },
  { id: 'anthropic-mcp2',  provider: 'Anthropic',        title: 'MCP: Advanced Topics',                    status: 'planned',     progress: 0,  category: 'ai',    description: 'Advanced MCP patterns and production integration strategies.' },
  { id: 'anthropic-bdrk',  provider: 'Anthropic',        title: 'Claude with Amazon Bedrock',              status: 'planned',     progress: 0,  category: 'ai',    description: 'Deploying and scaling Claude via Amazon Bedrock.' },
  { id: 'anthropic-vtx',   provider: 'Anthropic',        title: 'Claude with Google Vertex AI',            status: 'planned',     progress: 0,  category: 'ai',    description: 'Deploying and scaling Claude via Google Cloud\'s Vertex AI.' },
  { id: 'ms-az900',        provider: 'Microsoft',        title: 'AZ-900: Azure Fundamentals',              status: 'planned',     progress: 0,  category: 'cloud', description: 'Cloud concepts, Azure architecture, and core Azure services.' },
  { id: 'ms-pl300',        provider: 'Microsoft',        title: 'PL-300: Power BI Data Analyst',           status: 'planned',     progress: 0,  category: 'data',  description: 'Data modelling, transformation, and visualisation in Power BI.' },
  { id: 'ms-dp300',        provider: 'Microsoft',        title: 'DP-300: Azure Database Administrator',    status: 'planned',     progress: 0,  category: 'cloud', description: 'Managing and securing relational databases in Azure.' },
  { id: 'aws-sa',          provider: 'Amazon',           title: 'Solutions Architect Associate',           status: 'planned',     progress: 0,  category: 'cloud', description: 'AWS architecture patterns and services for robust solutions design.' },
  { id: 'li-fullstack',    provider: 'LinkedIn Learning', title: 'Pathway to Full-Stack Engineering',      status: 'planned',     progress: 0,  category: 'dev',   description: 'Full-stack fundamentals from HTML/CSS through to back-end and deployment.' },
  { id: 'li-data',         provider: 'LinkedIn Learning', title: 'Data Analyst Pathway',                   status: 'planned',     progress: 0,  category: 'data',  description: 'Core analyst skills: statistics, SQL, Excel, and visualisation.' },
  { id: 'databricks',      provider: 'Databricks',       title: 'Lakehouse Fundamentals',                  status: 'planned',     progress: 0,  category: 'data',  description: 'Data engineering and ML workflows on the Databricks Lakehouse platform.' },
  { id: 'snowflake',       provider: 'Snowflake',        title: 'SnowPro Core Certification',              status: 'planned',     progress: 0,  category: 'data',  description: 'Cloud data warehousing, data loading, and query optimisation.' },
  { id: 'docker',          provider: 'Docker',           title: 'Docker Foundations',                      status: 'planned',     progress: 0,  category: 'dev',   description: 'Containerisation fundamentals, Compose, and deployment workflows.' },
];

window.READING = [
  {
    slug: 'the-alignment-problem',
    num: '01', title: 'The Alignment <em>Problem</em>', author: 'Brian Christian',
    publisher: 'W. W. Norton & Company', year: 2020, tag: 'Reading', tone: 'cherry',
    progress: 38,
    lede: 'A lucid account of the technical and human challenges in making AI systems do what we actually want.',
    why: 'Reading this alongside my Anthropic courses — it fills in the conceptual background behind a lot of what I\'m building. The book is good at distinguishing between "the model does what we said" and "the model does what we meant," which is exactly the tension I think about in AI integration work.',
    notes: [
      { tag: 'Ch. 2', text: 'On reward hacking — the model optimises exactly what you measured, not what you cared about. Directly relevant to designing AI features: specify the outcome, not just the action.' },
      { tag: 'Ch. 4', text: 'Imitation learning and the challenge of teaching values by example. Useful framing for how users "teach" an AI product through their behaviour.' },
    ],
  },
  {
    slug: 'thinking-fast-and-slow',
    num: '02', title: 'Thinking, Fast <em>and Slow</em>', author: 'Daniel Kahneman',
    publisher: 'Farrar, Straus and Giroux', year: 2011, tag: 'Bookshelf', tone: 'bubblegum',
    progress: 100,
    lede: 'The book behind every UX research insight about cognitive bias — finally read in full.',
    why: 'I\'d cited Kahneman in research decks for years before actually reading this cover to cover. Reading it properly changed how I frame research findings: System 1 vs. System 2 is a useful shorthand, but the underlying studies are more nuanced and more useful than the shorthand suggests.',
    notes: [
      { tag: 'Part II', text: 'On anchoring and availability heuristics. I now include an "anchoring check" in every usability test debrief — are we anchoring on the first session, the most dramatic failure, the last one?' },
      { tag: 'Part IV', text: 'On the planning fallacy. Directly applicable to every project estimate I\'ve ever made or received.' },
    ],
  },
  {
    slug: 'sprint',
    num: '03', title: '<em>Sprint</em>', author: 'Jake Knapp, John Zeratsky, Braden Kowitz',
    publisher: 'Simon & Schuster', year: 2016, tag: 'Bookshelf', tone: 'lilac',
    progress: 100,
    lede: 'The five-day design sprint methodology — read it to steal from it, not to follow it.',
    why: 'I picked this up because Ion Studio\'s three-week audit-prototype-handoff cycle is loosely derived from sprint thinking. The book is more prescriptive than I\'d like, but the core principle — prototype and test something real before committing resources — is sound and underused.',
    notes: [
      { tag: 'Day 3', text: 'On parallel prototyping before converging. We adapted this for Ion Studio: multiple AI integration approaches in one week, then pick the one worth testing.' },
      { tag: 'Day 5', text: 'On the interview structure. The sprint interview format (5 users, back-to-back, one debrief) is still one of the most efficient research formats I use.' },
    ],
  },
  {
    slug: 'invisible-women',
    num: '04', title: 'Invisible <em>Women</em>', author: 'Caroline Criado Perez',
    publisher: 'Chatto & Windus', year: 2019, tag: 'Bookshelf', tone: 'moss',
    progress: 100,
    lede: 'On the data gap — how designing for the default male user creates systems that fail half the population.',
    why: 'This is the book I reference when product managers think research recruitment doesn\'t matter. The argument is simple and devastating: when you don\'t gather data on a group, you design as if they don\'t exist. Applies to AI training data, UX research, analytics dashboards, and everything in between.',
    notes: [
      { tag: 'Part I', text: 'On the default male in data. The hospital crash test dummy chapter is one of the most effective single arguments for diverse research participants I\'ve read.' },
      { tag: 'Part III', text: 'On medical data. Directly influenced how I think about accessibility-first design — who\'s in the dataset, and whose edge case are you treating as the norm?' },
    ],
  },
  {
    slug: 'make',
    num: '05', title: '<em>Make</em>', author: 'Pieter Levels',
    publisher: 'Self-published', year: 2019, tag: 'Bookshelf', tone: 'cherry',
    progress: 100,
    lede: 'A scrappy, honest guide to building internet products — relevant whether you\'re solo or co-founding.',
    why: 'Read this while building the early Ion Studio concept. Levels\' core argument — ship something real before you polish anything — is one I\'ve disagreed with in detail but agreed with in principle. The bit on charging from day one changed how we approached our first client conversation.',
    notes: [
      { tag: 'Ch. 4', text: 'On charging early. The argument that "free" devalues your product and your time is more nuanced in practice, but the bias toward charging is a useful corrective.' },
      { tag: 'Ch. 6', text: 'On avoiding perfectionism. Relevant for both design and product work — the WheelToDo beta launched with known gaps, and that was the right call.' },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Learning — certifications in progress and planned
   ───────────────────────────────────────────────────────── */
window.LEARNING = [
  { id: 1, slug: 'google-ux', title: 'Google UX Design Certificate', provider: 'Google', status: 'active', platform: 'Coursera', desc: 'Foundations of UX research, wireframing, prototyping, and usability testing.',
    tone: 'cherry', glyph: 'compass', progress: 40,
    lede: 'A structured foundation in UX — covering research, wireframing, prototyping, and testing across mobile and web.',
    sections: [
      { kind: 'block', tag: 'Why this cert', title: 'Formalising what I\'ve been doing.', body: 'Most of my UX practice has been learn-by-doing — working through real projects, running research sessions, and iterating on live products. This certificate is about filling in the formal gaps: grounding the intuition in documented methodology, and building a portfolio that shows the research process, not just the final output. The Google certificate has more rigour around research documentation than most alternatives.' },
      { kind: 'metrics', items: [
        { num: '40%', label: 'Progress to date' },
        { num: '7', label: 'Courses in the certificate' },
        { num: 'Active', label: 'Status' },
        { num: 'Coursera', label: 'Platform' },
      ] },
      { kind: 'block', tag: 'What I\'m taking away', title: 'Research documentation and portfolio process.', body: 'The most useful part so far has been the research documentation framework — how to structure a usability study so findings are legible to stakeholders who weren\'t in the sessions. I\'ve also started applying the certificate\'s portfolio approach retroactively to past projects like WheelToDo, which has surfaced decisions I made instinctively but couldn\'t previously articulate cleanly to clients.' },
    ],
  },
  { id: 2, slug: 'google-data', title: 'Google Data Analytics Certificate', provider: 'Google', status: 'planned', platform: 'Coursera', desc: 'Data cleaning, analysis, visualisation, and SQL fundamentals.' },
  { id: 3, slug: 'microsoft-data', title: 'Microsoft Data Certificates', provider: 'Microsoft', status: 'planned', platform: 'Microsoft Learn', desc: 'Azure data fundamentals and data engineering paths.' },
  { id: 4, slug: 'databricks', title: 'Databricks Certification', provider: 'Databricks', status: 'planned', platform: 'Databricks Academy', desc: 'Lakehouse architecture, Apache Spark, and data engineering workflows.' },
  { id: 5, slug: 'snowflake', title: 'Snowflake Certification', provider: 'Snowflake', status: 'planned', platform: 'Snowflake University', desc: 'Cloud data warehousing, data sharing, and Snowflake architecture.' },
  { id: 6, slug: 'anthropic', title: 'Anthropic AI Certification', provider: 'Anthropic', status: 'planned', platform: 'Anthropic', desc: 'Responsible AI development, prompt engineering, and Claude API fundamentals.' },
  { id: 7, slug: 'linkedin-learning', title: 'LinkedIn Learning', provider: 'LinkedIn', status: 'planned', platform: 'LinkedIn Learning', desc: 'Ongoing courses across design, data, and professional development.' },
  { id: 8, slug: 'docker', title: 'Docker Certification', provider: 'Docker', status: 'planned', platform: 'Docker', desc: 'Containerisation, Docker Compose, and deploying applications with Docker.' },
];

/* ─────────────────────────────────────────────────────────
   Creative — art submissions and other works
   ───────────────────────────────────────────────────────── */
window.CREATIVE = [
  { id: 1, slug: 'incognito-2025', title: 'Incognito Art Show 2025', meta: '3 submissions · Canberra · 2025', desc: 'Three small works sold anonymously at the Incognito Art Show.',
    tone: 'bubblegum',
    lede: 'Three works entered anonymously at the Canberra show where every piece sells for the same price and no one knows who made what.',
    sections: [
      { kind: 'block', tag: 'The Show', title: 'Art without the hierarchy.', body: 'The Incognito Art Show is an annual fundraiser at the Canberra Museum and Gallery where artists submit 20×25cm works anonymously — buyers don\'t know who made what until after purchase. Every piece sells for the same price. It\'s the most level playing field in the Canberra art scene: no names, no reputation, just the work in front of you.' },
      { kind: 'block', tag: 'The Work', title: 'Three small pieces on paper.', body: 'All three submissions were mixed-media works on paper — combining ink, watercolour wash, and printed text fragments. The pieces share a loose theme of maps and displacement: two are abstract interpretations of Sri Lankan coastal geography, and the third is a typographic piece built around a phrase that\'s been sitting in a notebook for a few years. All three sold.' },
      { kind: 'metrics', items: [
        { num: '3', label: 'Pieces submitted' },
        { num: '3', label: 'Pieces sold' },
        { num: '20×25cm', label: 'Fixed format for all works' },
        { num: '2025', label: 'Year' },
      ] },
    ],
  },
  { id: 2, slug: 'incognito-2026', title: 'Incognito Art Show 2026', meta: '3 submissions · Canberra · 2026', desc: 'Three small works for the 2026 Incognito Art Show.' },
  { id: 3, slug: 'other-artworks', title: 'Other Artworks', meta: 'Various · Ongoing', desc: 'A collection of artworks made outside of exhibition submissions.' },
];
