console.log('hello')
module.exports = {
  launch: {
    dumpio: true,
    headless: true//process.env.HEADLESS !== 'false',
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
}