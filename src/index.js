const { remote } = require('webdriverio');
const ip = require('ip');


(async () => {
    const BASE_URL = `http://${ip.address()}:5000/`
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url(BASE_URL)

    const bodyElem = await browser.$('body')
    await bodyElem.click()

    console.log(await browser.getTitle()) // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    })
    await browser.deleteSession()
})().catch((e) => console.error(e))
