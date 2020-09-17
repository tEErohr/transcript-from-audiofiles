const PageElement = require('./element');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page extends PageElement {

    constructor(browser, baseUrl = 'http://127.0.0.1:3000'){
        super(browser);
        this.baseUrl = baseUrl;
    }

    /**
    * Opens a sub page of the page
    * @param {string} [path] path of the sub page (e.g. /path/to/page.html)
    */
    open (path = '') {
        return this.browser.url(`${this.baseUrl}/${path}`)
    }
}
