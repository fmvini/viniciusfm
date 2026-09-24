import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  CaretDown,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  Moon,
  Sun,
  X,
} from '@phosphor-icons/react'
import { education, profile, projects, skillGroups, type Project } from './content'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      document.documentElement.style.setProperty('--scroll-progress', String(progress))
      frame = 0
    }
    const scheduleProgress = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', scheduleProgress, { passive: true })
    window.addEventListener('resize', scheduleProgress)
    return () => {
      window.removeEventListener('scroll', scheduleProgress)
      window.removeEventListener('resize', scheduleProgress)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner container">
          <a className="brand" href="#inicio" aria-label="Vinícius, voltar ao início">
            vinicius<span>fm</span>
          </a>

          <nav id="mobile-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-button theme-toggle"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
              title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            >
              {theme === 'dark' ? <Sun size={20} weight="regular" /> : <Moon size={20} weight="regular" />}
            </button>
            <button
              className="icon-button menu-toggle"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero grid-surface" id="inicio" aria-labelledby="hero-title">
          <div className="hero-inner container">
            <img className="portrait" src="/images/me.jpeg" alt="Retrato de Vinícius F. Marrocos" width="901" height="1600" fetchPriority="high" />
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                <EnvelopeSimple size={18} weight="regular" />
                Entrar em contato
              </a>
              <a className="button button-secondary" href="#projetos">
                Ver projetos
                <ArrowDown size={18} weight="regular" />
              </a>
            </div>

            <div className="social-links" aria-label="Links profissionais">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Vinícius">
                <GithubLogo size={21} weight="regular" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Vinícius">
                <LinkedinLogo size={21} weight="regular" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label={`Enviar e-mail para ${profile.email}`}>
                <EnvelopeSimple size={21} weight="regular" />
              </a>
            </div>

            <a className="scroll-cue" href="#sobre" aria-label="Ir para a seção Sobre">
              <ArrowDown size={23} weight="light" />
            </a>
          </div>
        </section>

        <section className="section about-section" id="sobre" aria-labelledby="about-title">
          <div className="container narrow-container">
            <div className="section-heading" data-reveal>
              <span className="section-label">Sobre</span>
              <h2 id="about-title">Quem está por trás do código</h2>
            </div>
            <div className="prose" data-reveal style={{ transitionDelay: '80ms' }}>
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="section skills-section grid-surface" id="stack" aria-labelledby="skills-title">
          <div className="container narrow-container">
            <div className="section-heading" data-reveal>
              <span className="section-label">Stack</span>
              <h2 id="skills-title">Tecnologias que uso no dia a dia</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, groupIndex) => (
                <div className="skill-group" key={group.title} data-reveal style={{ transitionDelay: `${groupIndex * 80}ms` }}>
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.skills.map((skill, skillIndex) => <li key={skill} data-reveal="scale" style={{ transitionDelay: `${groupIndex * 80 + skillIndex * 30}ms` }}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section grid-surface" id="projetos" aria-labelledby="projects-title">
          <div className="container narrow-container">
            <div className="section-heading" data-reveal>
              <span className="section-label">Projetos</span>
              <h2 id="projects-title">O que tenho construído</h2>
              <p>Produtos completos, pensados da experiência de uso até a API e os dados.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section className="section education-section" id="formacao" aria-labelledby="education-title">
          <div className="container narrow-container">
            <div className="section-heading" data-reveal>
              <span className="section-label">Formação</span>
              <h2 id="education-title">Sempre aprendendo</h2>
            </div>
            <div className="education-row" data-reveal>
              <div>
                <span className="education-status">{education.status}</span>
                <h3>{education.course}</h3>
                <p>{education.school}</p>
              </div>
              <span className="education-kind">Graduação</span>
            </div>
            <div className="languages-row" data-reveal style={{ transitionDelay: '80ms' }}>
              <span>Idiomas</span>
              <p>Português nativo <span aria-hidden="true">·</span> Inglês avançado</p>
            </div>
          </div>
        </section>

        <section className="section contact-section grid-surface" id="contato" aria-labelledby="contact-title">
          <div className="container narrow-container" data-reveal>
            <span className="section-label">Contato</span>
            <h2 id="contact-title">Vamos conversar?</h2>
            <p>Tem um projeto, uma oportunidade ou uma ideia para trocar? Minha caixa de entrada está aberta.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={28} weight="regular" aria-hidden="true" />
            </a>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="browser-bar" aria-hidden="true">
        <div className="browser-dots"><i /><i /><i /></div>
        <span>{project.domain}</span>
      </div>
      <a className="project-preview" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.name} em outra aba`}>
        <img src={project.screenshot} alt={project.screenshotAlt} loading="lazy" decoding="async" width="1920" height="1080" />
      </a>
      <div className="project-body">
        <div className="project-topline">
          <img className="project-mark" src={project.mark} alt="" width="38" height="38" loading="lazy" />
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.name} em outra aba`}>
            Abrir site <ArrowUpRight size={16} weight="regular" />
          </a>
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-tags" aria-label={`Tecnologias do ${project.name}`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {project.repoUrl && (
          <a className="project-repo" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <GithubLogo size={16} weight="regular" /> Ver código <ArrowUpRight size={15} weight="regular" />
          </a>
        )}
        <details className="project-details">
          <summary>Ver detalhes <CaretDown size={16} weight="regular" /></summary>
          <ul>
            {project.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          {project.note && <p className="project-note">{project.note}</p>}
        </details>
      </div>
    </article>
  )
}

export default App
