// Text wrapped in **double asterisks** is rendered bold.

export const profile = {
  name: 'Gitanshu Sankhla',
  role: 'Go backend & AI developer',
  location: 'Gandhinagar, India',
  avatar: 'https://avatars.githubusercontent.com/u/77137963?v=4',
  github: 'https://github.com/Gitax18',
  linkedin: 'https://www.linkedin.com/in/gitanshu-sankhla',
  resume: 'https://drive.google.com/file/d/1lFvSMgc5k-WOewiOgT6b6ohYjuErJUlm/view',
  // Web3Forms access key for the contact form, read from VITE_WEB3FORMS_KEY at build time.
  contactFormKey: import.meta.env.VITE_WEB3FORMS_KEY ?? '',
  about:
    'I build REST and gRPC services in Go, Postgres-backed job queues, and LLM pipelines with RAG and structured output. I ship them in Docker on AWS and GCP.',
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
    description: 'Give it a GitHub repo and it writes the README, draws architecture and database diagrams, and creates context files for AI coding tools.',
    points: [
      'A **Go API** hands work to **Python AI workers** through a **Postgres job queue**, with a Next.js frontend.',
      'Uses **RAG** to pick the files that matter most, then checks that every file the AI cites really exists.',
      'Runs on **AWS EC2** in Docker, deployed automatically by GitHub Actions.',
    ],
    tags: ['Go', 'Python', 'Next.js', 'PostgreSQL', 'OpenAI', 'AWS'],
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
    id: 'tally',
    title: 'Tally',
    description: 'Self-hosted, cookie-free web analytics. Add one line to your site to see visitors, top pages and where traffic comes from, without tracking anyone personally.',
    tags: ['Go', 'PostgreSQL', 'Next.js', 'Heroku', 'Vercel'],
    repo: 'https://github.com/Gitax18/tally',
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
    text: 'During my M.Sc. IT at DAU, I contribute to the BlindC event, supervise intra-college competitive programming contests, and help run the club’s contests and events.',
  },
  {
    title: 'Microsoft Student Technical Club (MSTC), Dhirubhai Ambani University',
    role: 'Member',
    text: 'Also at DAU during my M.Sc. IT. I was a problem setter and project judge for the RepoReboot ’26 hackathon, and I mentor juniors and contribute to club activities.',
  },
  {
    title: 'GDG Jodhpur',
    role: 'Volunteer',
    text: 'Active member of the developer community in Jodhpur. I volunteered backstage at DevFest ’25 Jodhpur, where I managed registrations, helped plan the event, and coordinated on-site tasks on the day.',
  },
]
