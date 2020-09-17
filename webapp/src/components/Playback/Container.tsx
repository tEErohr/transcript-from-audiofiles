import * as React from 'react'

export interface PlaybackSource {
  id: string
  uri: string
}

export interface PlaybackContainerProps {
  sources: Array<{
    id: string
    uri: string
  }>
}

export function PlaybackContainer ( props: PlaybackContainerProps ): JSX.Element {
  return (<div className="audio-player">
    <audio controls data-transcript-ui="audio-player">
      {props.sources.map((source) => (
        <source key={source.id} src={source.uri} />
      ))}
    </audio>
  </div>)
}
