export enum RecordingState {
  initial='initial',
  ready='ready',
  recording='recording',
  stopped='stopped'
}

export interface RecordingApi {
  recordingState: RecordingState
  start():void
  abort():void
}