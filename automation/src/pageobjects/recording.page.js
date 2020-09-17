const PageElement = require("./element");
const Page = require("./page");

class Playback extends PageElement {
  getAudioElement() {
    return this.getTranscriptUIElement("audio-player");
  }

  async play() {
    const audio = await this.getAudioElement();
    audio.play();
  }

  async pause() {
    const audio = await this.getAudioElement();
    audio.pause();
  }
}

class Recording extends PageElement {
  /**
   *
   * @param {'start'|'stop'|'reset'} actionType
   */
  getControlButton(actionType) {
    return this.getTranscriptUIElement(`recording-${actionType}-button`);
  }

  async startRecording() {
    const startButtonEl = await this.getControlButton("start");
    await startButtonEl.click();
  }

  async abortRecording() {
    const stopButtonEl = await this.getControlButton("stop");
    await stopButtonEl.click();
  }

  async resetTranscript() {
    const resetButtonEl = await this.getControlButton("rest");
    await resetButtonEl.click();
  }
}

class RecordingPage extends Page {
  playback = new Playback(this.browser);
  recording = new Recording(this.browser);

  async start() {
    await Promise.all([this.playback.play(), this.recording.startRecording()]);
    const audioItem = (await this.playback.getAudioElement())
    console.log('audioItem', audioItem)
  }
}

module.exports = RecordingPage;
