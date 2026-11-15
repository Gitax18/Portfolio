export const profile = {
  name: 'Gitanshu Sankhla',
  role: 'Go Backend & AI Developer',
  location: 'Gandhinagar, India',
  avatar: 'https://avatars.githubusercontent.com/u/77137963?v=4',
  github: 'https://github.com/Gitax18',
  linkedin: 'https://www.linkedin.com/in/gitanshu-sankhla',
  about:
    'I build Go backends and AI-powered products, from PostgreSQL-backed APIs to LLM features like embeddings and RAG. M.Sc. IT student at DA-IICT, interested in distributed systems and developer tooling.',
}

export const highlights = [
  { value: 'AIR 96', label: 'M.Sc. IT entrance' },
  { value: 'Top 100', label: 'HackHazards ’25' },
]

export const experience = [
  {
    title: 'Software Engineer Intern',
    meta: 'Stealth startup',
    text: 'Go, PostgreSQL, Docker and Kubernetes backend services.',
  },
  {
    title: 'M.Sc. Information Technology',
    meta: 'DA-IICT',
    text: 'Backend, distributed systems, cloud and AI systems.',
  },
  {
    title: 'BCA',
    meta: 'Lucky Institute, Jodhpur',
    text: 'Where I started hackathons and DevSphere.',
  },
]

export const projects = [
  {
    id: 'readmely',
    title: 'Readmely',
    description: 'Turns a codebase into a README, diagrams and AI context. Go API, Python AI service, Postgres job queue.',
    tags: ['Go', 'Python', 'PostgreSQL', 'pgvector'],
    status: 'In development',
  },
  {
    id: 'docomate',
    title: 'Docomate AI',
    description: 'README generator and chat for your codebase. Top 100 at HackHazards ’25, built solo.',
    tags: ['NestJS', 'React', 'MongoDB', 'Groq'],
    status: 'Hackathon',
  },
  {
    id: 'salon',
    title: 'Salon Queue',
    description: 'Live queue for a hair salon, with customer, staff and waiting-room TV screens.',
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
    description: 'One description in, posts for every social platform out. Built in 24 hours.',
    tags: ['Next.js', 'Express', 'MongoDB', 'Groq'],
    status: 'Hackathon',
  },
  {
    id: 'quad',
    title: 'Quadcopter controller',
    description: 'Custom flight controller on ESP32 and MPU6050, with a live 3D orientation view.',
    tags: ['C++', 'ESP32', 'MPU6050'],
    repo: 'https://github.com/Gitax18/quadcopter-and-controller',
    status: 'In progress',
  },
]

export const achievements = [
  { title: 'Docker AI/ML Hackathon ’23', text: 'Winner (ReadmeAI)' },
  { title: 'HackHazards ’25', text: 'Top 100 of ~800 submissions' },
]

export const skills = [
  { group: 'Backend', items: ['Go', 'Fiber', 'REST', 'JWT', 'Job queues'], core: true },
  { group: 'AI', items: ['Python', 'LLM APIs', 'Embeddings / RAG', 'Langflow'], core: true },
  { group: 'Data', items: ['PostgreSQL', 'pgvector', 'Redis', 'MongoDB'] },
  { group: 'DevOps (basics)', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'GCP'] },
  { group: 'Earlier (MERN)', items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express'] },
]

export const community = [
  { title: 'Microsoft Student Technical Club, DA-IICT', text: 'Web team member' },
  { title: 'Programming Club, DA-IICT', text: 'Batch representative' },
  { title: 'GDG Jodhpur · DevFest', text: 'Volunteer' },
  { title: 'DevSphere', text: 'Co-founder' },
]
