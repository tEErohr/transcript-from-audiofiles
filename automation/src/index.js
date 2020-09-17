const { remote } = require('webdriverio');

const { delay } = require('./utils');

const config = require('./config');
const RecordingPage = require('./pageobjects/recording.page');


async function createBrowser( ) {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        },
        execArgv: [
          'disable-device-discovery-notifications',
          'disable-infobars',
          'use-fake-device-for-media-stream',
          'use-fake-ui-for-media-stream',
          'ignore-certificate-errors',
          `user-data-dir=${config.chrome.profilesPath}`,
          `profile-directory=${config.chrome.profileName}`
        ]
    })
    return browser
}
    
const waitUntilAbort = () => new Promise((resolve) => process.once('SIGABRT', resolve))

const start = (async () => {
    const browser = await createBrowser()
    const page = new RecordingPage(browser)
    await page.open()
    
    await page.start()
    
    await waitUntilAbort()
    await browser.deleteSession()
})


start().catch((e) => console.error(e));
