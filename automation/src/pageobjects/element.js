module.exports = class PageElement {
  /**
   *
   * @param {import('webdriverio').BrowserObject} browser
   */
  constructor(browser) {
    this.browser = browser;
  }

  getTranscriptUIElement(name) {
    return this.browser.$(`[data-transcript-ui="${name}"]`);
  }
};
