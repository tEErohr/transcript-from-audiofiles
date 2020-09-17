import React from "react";
import "./App.css";
import { PlaybackContainer } from './components/Playback/Container';
import { RecordingContainer } from "./components/Recorder/Container";
import { AudioSourceFile, AudioSourceProvider } from "./services/audioSourceProvider/provider";

const providerService = new AudioSourceProvider();

function App() {
  const [sourceFiles, setSourceFiles] = React.useState<AudioSourceFile[]>([]);

  React.useEffect(() => {
    const fetch = async () => {
      const items = await providerService.fetchIndex();
      setSourceFiles(items);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <RecordingContainer />
      <PlaybackContainer sources={sourceFiles} />
    </div>
  );
}

export default App;
