export const profile = {
  name: 'Vinícius F. Marrocos',
  shortName: 'viniciusfm',
  role: 'Desenvolvedor Fullstack & AI Engineer',
  intro:
    'Desenvolvo aplicações web completas, com frontend em React e TypeScript e o backend em Python e Node.js.',
  about: [
    'Sou desenvolvedor fullstack em formação e curso Análise e Desenvolvimento de Sistemas no IFSP. Gosto de transformar necessidades reais em produtos que sejam claros para quem usa e sólidos por dentro.',
    'No VFitness, trabalhei no fluxo de treinos e na arquitetura com React, FastAPI e PostgreSQL. No Vault, reuni transações, planejamento e visualização de finanças pessoais em uma experiência para desktop e celular.',
    'Tenho interesse especial em inteligência artificial aplicada ao desenvolvimento e sigo aprofundando práticas de testes, segurança e entrega de software.',
  ],
  email: 'viniciusfmarrocos@gmail.com',
  github: 'https://github.com/fmvini',
  linkedin: 'https://www.linkedin.com/in/vin%C3%ADcius-fatichi-marrocos/',
} as const

export const skillGroups = [
  {
    title: 'Front-end',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Back-end & dados',
    skills: ['Python', 'FastAPI', 'Node.js', 'APIs REST', 'PostgreSQL', 'MySQL', 'SQL', 'Alembic'],
  },
  {
    title: 'Qualidade & entrega',
    skills: ['Testes automatizados', 'Git & GitHub', 'Vercel', 'Supabase', 'OAuth Google', 'CORS'],
  },
  {
    title: 'IA & fluxo de trabalho',
    skills: ['Claude Code', 'Codex CLI', 'Kanban', 'Trello'],
  },
] as const

export type Project = {
  name: string
  url: string
  repoUrl?: string
  domain: string
  mark: string
  screenshot: string
  screenshotAlt: string
  summary: string
  details: string[]
  tags: string[]
  note?: string
}

export const projects: Project[] = [
  {
    name: 'VFitness',
    url: 'https://vfitness-app.vercel.app/',
    repoUrl: 'https://github.com/fmvini/vfitness',
    domain: 'vfitness-app.vercel.app',
    mark: '/images/vfitness-mark.svg',
    screenshot: '/images/vfitness-dashboard.png',
    screenshotAlt: 'Dashboard do VFitness com treinos da semana e formulário para novo treino',
    summary:
      'Aplicação fullstack para organizar treinos, registrar exercícios e acompanhar a evolução de cada usuário.',
    details: [
      'Frontend em React, API em Python com FastAPI e dados em PostgreSQL.',
      'Autenticação via Google, controle de acesso e integração com Supabase.',
      'Migrações com Alembic, testes automatizados e publicação de frontend e backend na Vercel.',
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Supabase'],
  },
  {
    name: 'Vault',
    url: 'https://vault-web-alpha.vercel.app/',
    repoUrl: 'https://github.com/fmvini/Vault',
    domain: 'vault-web-alpha.vercel.app',
    mark: '/images/vault-icon.svg',
    screenshot: '/images/vault-dashboard.png',
    screenshotAlt: 'Dashboard do Vault com saldo, gráficos, limites e transações recentes',
    summary:
      'Aplicação de finanças pessoais para registrar movimentações, acompanhar limites e planejar gastos futuros.',
    details: [
      'Transações em BRL, USD e EUR, categorias, despesas recorrentes e metas de poupança.',
      'Visão geral com saldo, evolução no tempo e distribuição de gastos por categoria.',
      'React e TypeScript no frontend; FastAPI, SQLAlchemy e autenticação JWT na API.',
    ],
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    note: 'A área de análises e relatórios ainda está em desenvolvimento.',
  },
]

export const education = {
  course: 'Análise e Desenvolvimento de Sistemas',
  school: 'Instituto Federal de São Paulo (IFSP)',
  status: 'Em andamento',
} as const
