import {
  profile,
  highlights,
  experience,
  projects,
  achievements,
  blog,
  skills,
  community,
} from './data'
import { ArrowIcon, GithubIcon, LinkedinIcon } from './icons'

const YEAR = new Date().getFullYear()

const sections = [
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['achievements', 'Achievements'],
  ['blog', 'Blog'],
  ['skills', 'Skills'],
  ['community', 'Community'],
  ['contact', 'Contact'],
]

function Tile({ className = '', children }) {
  return <article className={`tile ${className}`}>{children}</article>
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

/* One tile, one row per item: title left, detail right. */
function Rows({ items }) {
  return (
    <Tile className="rows">
      {items.map((i) => (
        <div key={i.title ?? i.group} className={`row ${i.url ? 'row-stack' : ''}`}>
          {i.url ? (
            <h3>
              <a className="row-link" href={i.url} target="_blank" rel="noreferrer">
                {i.title} <ArrowIcon />
              </a>
            </h3>
          ) : (
            <h3>{i.title ?? i.group}</h3>
          )}
          {i.items ? <Tags items={i.items} /> : <p className="muted">{[i.meta, i.text].filter(Boolean).join(' · ')}</p>}
        </div>
      ))}
    </Tile>
  )
}

function Project({ project }) {
  return (
    <Tile className="project">
      <div className="project-head">
        <h3>{project.title}</h3>
        {project.status && <span className="status">{project.status}</span>}
      </div>
      <p className="muted grow">{project.description}</p>
      <Tags items={project.tags} />
      {(project.live || project.repo) && (
        <div className="actions">
          {project.live && (
            <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
              Live <ArrowIcon />
            </a>
          )}
          {project.repo && (
            <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
              <GithubIcon /> Code
            </a>
          )}
        </div>
      )}
    </Tile>
  )
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">GS</a>
        <nav aria-label="Sections">
          <ul>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="page" id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-main">
            <img className="avatar" src={profile.avatar} alt={`${profile.name}`} width="56" height="56" />
            <div>
              <h1>{profile.name}</h1>
              <p className="muted">{profile.role} · {profile.location}</p>
            </div>
          </div>
          <p className="about">{profile.about}</p>
          <div className="hero-foot">
            <div className="actions">
              <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon /> LinkedIn
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>
            </div>
            <ul className="stats">
              {highlights.map((h) => (
                <li key={h.label}>
                  <strong>{h.value}</strong>
                  <span className="muted">{h.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="experience" title="Experience & education">
          <Rows items={experience} />
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((p) => (
              <Project key={p.id} project={p} />
            ))}
          </div>
          <a className="more-link" href={profile.github} target="_blank" rel="noreferrer">
            All repositories on GitHub <ArrowIcon />
          </a>
        </Section>

        <Section id="achievements" title="Hackathons & achievements">
          <Rows items={achievements} />
        </Section>

        <Section id="blog" title="Blog">
          <Rows items={blog} />
        </Section>

        <Section id="skills" title="Skills">
          <Rows items={skills} />
        </Section>

        <Section id="community" title="Community">
          <Rows items={community} />
        </Section>

        <Section id="contact" title="Contact">
          <Tile className="contact">
            <h3>Let’s build something.</h3>
            <div className="actions">
              <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon /> LinkedIn
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>
            </div>
          </Tile>
        </Section>
      </main>

      <footer className="footer muted">© {YEAR} {profile.name}</footer>
    </>
  )
}
