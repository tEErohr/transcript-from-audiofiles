
export class SRDriver {
  
  protected speechRecognitionInstance?:SpeechRecognition

  async requestResource():Promise<void> {
    if(this.speechRecognitionInstance) {
      return
    }
    this.speechRecognitionInstance = new SpeechRecognition()
  }
  
  async startSession() {
    const session = new SRSession(this);
    return session;
  }

}

export class SRSession {
  constructor(readonly driver:SRDriver){}

  private _result?:SpeechRecognitionResult

}

