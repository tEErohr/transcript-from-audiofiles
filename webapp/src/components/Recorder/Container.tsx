import * as React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export interface RecordingContainerProps {
  locale?: string
}

export function RecordingContainer ( props: RecordingContainerProps ): JSX.Element|null {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const { locale="en" } = props

  return (
    <div data-transcript-ui="recording-controls">
      <button data-transcript-ui="recording-start-button" onClick={() => SpeechRecognition.startListening({language: locale})}>Start</button>
      <button data-transcript-ui="recording-stop-button" onClick={() => SpeechRecognition.stopListening()}>Stop</button>
      <button data-transcript-ui="recording-reset-button" onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )

}