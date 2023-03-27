import "./App.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { DecentralizedStoragePlayback } from "./DecentralizedStoragePlayback";

/* livepeer Client using our api key  */
const client = createReactClient({
  provider: studioProvider({ apiKey: "YOUR_API_KEY" }),
});

function App() {
  return (
    <LivepeerConfig client={client}>
      <DecentralizedStoragePlayback />
    </LivepeerConfig>
  );
}

export default App;
