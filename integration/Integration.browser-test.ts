
describe('App', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })
 
  it('should display a react logo', async () => {
    await expect(page).toMatch('React')
  })

  it('should match a button with a "Learn React" text inside', async () => {
    await expect(page).toMatchElement('.App-link', { text: 'Learn React' })
  })
})
