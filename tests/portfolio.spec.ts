import { expect, test } from '@playwright/test'

test('mostra identidade, projetos e links corretos no desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Vinícius F. Marrocos')
  await expect(page.locator('.section-label')).toHaveText(['Sobre', 'Stack', 'Projetos', 'Formação', 'Contato'])
  await expect(page.locator('.hero-intro')).toHaveCSS('opacity', '1')
  await expect(page.getByRole('heading', { name: 'O que tenho construído' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Abrir VFitness em outra aba' })).toHaveAttribute('href', 'https://vfitness-app.vercel.app/')
  await expect(page.getByRole('link', { name: 'Abrir Vault em outra aba' })).toHaveAttribute('href', 'https://vault-web-alpha.vercel.app/')
  await expect(page.getByRole('link', { name: 'Ver código' }).first()).toHaveAttribute('href', 'https://github.com/fmvini/vfitness')
  await expect(page.getByRole('img', { name: 'Retrato de Vinícius F. Marrocos' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'viniciusfmarrocos@gmail.com', exact: true })).toHaveAttribute('href', 'mailto:viniciusfmarrocos@gmail.com')
  await expect(page.locator('.languages-row')).toContainText('Inglês avançado')
  await expect(page.locator('.languages-row')).not.toContainText('/fluente')

  await page.getByText('Ver detalhes').first().click()
  await expect(page.getByText('Migrações com Alembic, testes automatizados e publicação de frontend e backend na Vercel.')).toBeVisible()

  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
    window.scrollTo(0, 0)
  })
  await page.screenshot({ path: '.impeccable/review/desktop-hero.png' })
  await page.screenshot({ path: '.impeccable/review/desktop.png', fullPage: true })
})

test('alterna e preserva o tema', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('button', { name: 'Ativar tema claro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.screenshot({ path: '.impeccable/review/light-hero.png' })
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('menu e conteúdo funcionam no celular sem rolagem horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')

  await expect(page.locator('.hero-intro')).toHaveCSS('opacity', '1')

  await page.getByRole('button', { name: 'Abrir menu' }).click()
  await expect(page.getByRole('navigation', { name: 'Navegação principal' })).toBeVisible()
  await page.getByRole('navigation', { name: 'Navegação principal' }).getByRole('link', { name: 'Projetos' }).click()
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'O que tenho construído' })).toBeVisible()
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
  expect(overflow).toBe(false)

  for (const image of await page.locator('.project-preview img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect(image).toHaveJSProperty('complete', true)
    const loaded = await image.evaluate((element: HTMLImageElement) => element.naturalWidth > 0)
    expect(loaded).toBe(true)
  }

  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
    window.scrollTo(0, 0)
  })
  await page.screenshot({ path: '.impeccable/review/mobile-hero.png' })
  await page.screenshot({ path: '.impeccable/review/mobile.png', fullPage: true })
})

test('aplica a nova paleta e carrega as imagens reais sem overflow', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await expect(page.locator('.portrait')).toHaveJSProperty('naturalWidth', 901)
  await expect(page.locator('.portrait')).toHaveCSS('border-radius', '8px')
  const accent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim())
  expect(accent).toBe('#d8b8d2')
  await page.locator('#projetos').scrollIntoViewIfNeeded()
  for (const image of await page.locator('.project-preview img').all()) {
    await expect(image).toHaveJSProperty('complete', true)
    const loaded = await image.evaluate((element: HTMLImageElement) => element.naturalWidth > 0)
    expect(loaded).toBe(true)
  }
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 844 })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
    expect(overflow).toBe(false)
  }
})

test('reproduz entrada, revelação, hover e progresso com respeito a movimento reduzido', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveClass(/motion-ready/)
  await expect(page.locator('.portrait')).toHaveCSS('opacity', '1')

  const aboutHeading = page.locator('#sobre .section-heading')
  await aboutHeading.scrollIntoViewIfNeeded()
  await expect(aboutHeading).toHaveClass(/is-visible/)
  await expect(aboutHeading).toHaveCSS('opacity', '1')

  const projectCard = page.locator('.project-card').first()
  await projectCard.scrollIntoViewIfNeeded()
  await expect(projectCard).toHaveClass(/is-visible/)
  await projectCard.hover()
  await expect(projectCard).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -4)')
  const progress = await page.evaluate(() => Number(getComputedStyle(document.documentElement).getPropertyValue('--scroll-progress')))
  expect(progress).toBeGreaterThan(0)

  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await expect(page.locator('.portrait')).toHaveCSS('animation-name', 'none')
  await expect(page.locator('#projetos .section-heading')).toHaveCSS('opacity', '1')
})
