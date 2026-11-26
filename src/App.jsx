import { useState } from 'react'
import { profile, pipeline, experience, projects, achievements, blog, skills, community } from './data'
import { ArrowIcon, GithubIcon, LinkedinIcon, ResumeIcon } from './icons'

const YEAR = new Date().getFullYear()

const sections = [
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['achievements', 'Achievements'],
  ['blog', 'Writing'],
  ['skills', 'Skills'],
  ['community', 'Community'],
  ['contact', 'Contact'],
]

/* Renders **bold** segments from the plain strings in data.js. */
function Rich({ text }) {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

function Stack({ items, label = 'Tech used' }) {
  return (
    <ul className="stack" aria-label={label}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Points({ items }) {
  return (
    <ul className="points">
      {items.map((p) => (
        <li key={p}>
          <Rich text={p} />
        </li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="actions">
      {project.live && (
        <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
          Open {project.title}
        </a>
      )}
      {project.repo && (
        <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
          <GithubIcon /> Code
        </a>
      )}
    </div>
  )
}

function Pipeline() {
  return (
    <figure className="pipeline">
      <ol>
        {pipeline.map((step, i) => (
          <li key={step.name} style={{ '--i': i }}>
            <span className="step-name">{step.name}</span>
            {step.note && <span className="step-note">{step.note}</span>}
            {step.outputs && (
              <ul className="outputs">
                {step.outputs.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
      <figcaption>The layers I build, from the first request to deployment.</figcaption>
    </figure>
  )
}

/* Posts to Web3Forms, which emails each submission to the key's owner. */
function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!profile.contactFormKey) {
      setStatus('error')
      setError('The form isn’t set up yet. Please reach me on LinkedIn for now.')
      return
    }

    setStatus('sending')
    const data = new FormData(form)
    data.append('access_key', profile.contactFormKey)
    data.append('subject', `Portfolio message from ${data.get('name')}`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      form.reset()
      setStatus('sent')
      window.umami?.track('contact-form-sent')
    } catch {
      setStatus('error')
      setError('Your message didn’t send. Please try again, or reach me on LinkedIn.')
    }
  }

  if (status === 'sent') {
    return (
      <p className="form-status form-sent" role="status">
        Thanks, your message is on its way. I’ll get back to you by email.
      </p>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-pair">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={100} />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
      </div>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required maxLength={5000} />
      </label>
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" />
      <div className="form-foot">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' && (
          <p className="form-status form-error" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}

export default function App() {
  const [featured, ...rest] = projects

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Back to top">GS</a>
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
          <div className="hero-text">
            <img className="avatar" src={profile.avatar} alt="" width="64" height="64" />
            <h1>
              <span>Gitanshu</span> <span>Sankhla</span>
            </h1>
            <p className="role">
              {profile.role}, based in {profile.location}
            </p>
            <p className="about">{profile.about}</p>
            <div className="actions">
              <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon /> LinkedIn
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>
              <a
                className="btn"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                data-umami-event="resume-click"
                data-umami-event-location="hero"
              >
                <ResumeIcon /> Resume
              </a>
            </div>
          </div>
          <Pipeline />
        </section>

        <Section id="experience" title="Experience">
          {experience.map((job) => (
            <article className="job" key={job.company + job.role}>
              <header className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="org">
                    {job.company}, {job.place.toLowerCase()}
                  </p>
                </div>
                <p className="when">
                  {job.start} to {job.end}
                </p>
              </header>
              <Points items={job.points} />
              <Stack items={job.stack} />
            </article>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <article className="featured">
            <h3>{featured.title}</h3>
            <p className="lede">{featured.description}</p>
            <Points items={featured.points} />
            <Stack items={featured.tags} />
            <ProjectLinks project={featured} />
          </article>

          <div className="project-grid">
            {rest.map((p) => (
              <article className="project" key={p.id}>
                <h3>
                  {p.title}
                  {p.status && <span className="status">{p.status}</span>}
                </h3>
                <p className="muted">{p.description}</p>
                <Stack items={p.tags} />
                <div className="text-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live site
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <a className="more-link" href={profile.github} target="_blank" rel="noreferrer">
            See all repositories on GitHub
          </a>
        </Section>

        <Section id="achievements" title="Achievements">
          <dl className="rows">
            {achievements.map((a) => (
              <div className="row" key={a.title}>
                <dt>{a.title}</dt>
                <dd>
                  <span>{a.text}</span>
                  {a.link && (
                    <a className="row-link" href={a.link.url} target="_blank" rel="noreferrer">
                      {a.link.label} <ArrowIcon />
                    </a>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="blog" title="Writing">
          {blog.map((b) => (
            <a className="post" key={b.url} href={b.url} target="_blank" rel="noreferrer">
              <span className="post-title">
                {b.title} <ArrowIcon />
              </span>
              <span className="muted">{b.text}</span>
            </a>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <dl className="rows">
            {skills.map((s) => (
              <div className="row" key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <Stack items={s.items} label={s.group} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="community" title="Community">
          <dl className="rows">
            {community.map((c) => (
              <div className="row" key={c.title}>
                <dt>{c.role}</dt>
                <dd>
                  <span className="row-title">{c.title}</span>
                  {c.text && <span className="muted">{c.text}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-line">Want to talk about backend or AI work? Send me a message.</p>
          <ContactForm />
          <p className="contact-alt muted">Or find me here:</p>
          <div className="actions">
            <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a
              className="btn"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              data-umami-event="resume-click"
              data-umami-event-location="contact"
            >
              <ResumeIcon /> Resume
            </a>
          </div>
        </Section>
      </main>

      <footer className="footer">© {YEAR} {profile.name}</footer>
    </>
  )
}
