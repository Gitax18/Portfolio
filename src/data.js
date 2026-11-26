// Text wrapped in **double asterisks** is rendered bold.

export const profile = {
  name: 'Gitanshu Sankhla',
  role: 'Go backend & AI developer',
  location: 'Gandhinagar, India',
  avatar: 'https://avatars.githubusercontent.com/u/77137963?v=4',
  github: 'https://github.com/Gitax18',
  linkedin: 'https://www.linkedin.com/in/gitanshu-sankhla',
  about:
    'I build Go backends and AI products: REST APIs on Postgres, job queues, and LLM pipelines with RAG and structured output. I’m studying for an M.Sc. IT at Dhirubhai Ambani University (formerly DA-IICT) and building Readmely.',
}

// The hero diagram: a request travelling through the layers I build.
export const pipeline = [
  { name: 'Request in', note: 'A client calls the service' },
  { name: 'Go APIs', note: 'REST and gRPC services on OpenAPI contracts' },
  { name: 'Data and job queues', note: 'PostgreSQL, Redis and pgvector, with background workers' },
  { name: 'AI pipelines', note: 'RAG, embeddings and structured LLM output' },
  { name: 'Shipped', outputs: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions'] },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Stealth startup',
    place: 'Remote',
    start: 'Jan 2026',
    end: 'Jun 2026',
    points: [
      'Built a Go **file server microservice** for batch processing and the GCP migration, cutting cloud costs by **15%**.',
      'Built an **attachment-based phishing simulation service** that tracks whether each email is opened, clicked or submitted.',
      'Implemented a **chain-of-thought AI service** on xAI Grok that writes email templates for each user.',
      'Optimised Dockerfile build scripts, cutting build time by **45%**, from 36 to about 22 minutes.',
    ],
    stack: ['Go', 'GCP', 'Docker', 'xAI Grok'],
  },
]

export const projects = [
  {
    id: 'readmely',
    title: 'Readmely',
    featured: true,
    description: 'Turns a GitHub repository into a README, architecture and ER diagrams, and an AI context pack.',
    points: [
      'Go REST API, Python AI workers and a Next.js UI, all on **OpenAPI contracts**, with a **Postgres job queue** between them.',
      '**RAG pipeline** that pulls entry points and top-ranked files from an import graph into token-budgeted prompts, with JSON-schema output, grounding checks on every cited file and prompt-injection isolation.',
      'Writes **context packs** (CLAUDE.md, AGENTS.md, Cursor rules) and draws diagrams with a custom SVG layout engine; ER diagrams come from SQL migrations.',
      'Runs on **AWS EC2** in Docker and on Vercel, deployed by GitHub Actions with OIDC, and monitored with CloudWatch alarms.',
    ],
    tags: ['Go', 'Python', 'FastAPI', 'Next.js', 'OpenAI', 'PostgreSQL', 'Redis', 'AWS'],
    repo: 'https://github.com/Gitax18/readmely',
    live: 'https://readmely.gitanshu.me',
  },
  {
    id: 'salon',
    title: 'Salon Queue',
    description: 'Live queue for a hair salon, with screens for customers, staff and the waiting-room TV.',
    tags: ['React', 'Express', 'Tailwind'],
    repo: 'https://github.com/Gitax18/itp-salon-queue-project',
    live: 'https://itp-salon-queue-project.vercel.app',
  },
  {
    id: 'gobank',
    title: 'GoBank',
    description: 'Banking REST API with JWT auth, accounts and money transfers.',
    tags: ['Go', 'Fiber', 'PostgreSQL', 'JWT'],
    repo: 'https://github.com/Gitax18/gobank',
  },
  {
    id: 'socialsync',
    title: 'Social Sync AI',
    description: 'Write one description and get a post for every social platform. Built in 24 hours.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Groq'],
    repo: 'https://github.com/Gitax18/social-sync-ai',
    status: 'Hackathon',
  },
]

export const achievements = [
  {
    title: 'Docker AI/ML Hackathon ’23',
    text: 'Winner with ReadmeAI, an AI README generator.',
    link: { label: 'Read about it on the Docker blog', url: 'https://www.docker.com/blog/readmeai-an-ai-powered-readme-generator-for-developers/' },
  },
  {
    title: 'NAMESPACE HackHazards ’25',
    text: 'Top 100 out of 3,000+ ideas and 800+ submissions, with Docomate AI.',
  },
]

export const blog = [
  {
    title: 'ReadMeAI: An AI-powered README Generator for Developers',
    text: 'On the Docker blog. Upload your code, describe it, and get Markdown you can edit.',
    url: 'https://www.docker.com/blog/readmeai-an-ai-powered-readme-generator-for-developers/',
  },
]

export const skills = [
  { group: 'Languages', items: ['Go', 'Python', 'TypeScript', 'C++'] },
  { group: 'Backend', items: ['REST', 'OpenAPI', 'gRPC', 'Gin', 'Chi', 'Fiber', 'FastAPI', 'Express'] },
  { group: 'Data', items: ['PostgreSQL', 'pgvector', 'Redis', 'MongoDB', 'Pinecone'] },
  { group: 'AI and LLMs', items: ['RAG', 'Embeddings', 'Vector search', 'Structured output', 'LangChain', 'LangGraph'] },
  { group: 'Cloud and DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions', 'Linux'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
]

export const community = [
  {
    title: 'Programming Club, Dhirubhai Ambani University',
    role: 'Batch representative',
    text: 'Help classmates with DSA and organise competitive programming events.',
  },
  {
    title: 'Microsoft Student Technical Club, Dhirubhai Ambani University',
    role: 'Member',
    text: 'Organise events and mentor juniors in web development and generative AI.',
  },
  { title: 'GDG Jodhpur, DevFest', role: 'Volunteer' },
  { title: 'DevSphere', role: 'Co-founder' },
]
