import "./App.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { DecentralizedStoragePlayback } from "./DecentralizedStoragePlayback";

/* livepeer Client using our api key  */
const client = createReactClient({
  provider: studioProvider({ apiKey: "45087818-a31a-4541-9892-fe8e0a06145d" }),
});

function App() {
  return (
    <LivepeerConfig client={client}>
      <DecentralizedStoragePlayback />
    </LivepeerConfig>
  );
}

export default App;
