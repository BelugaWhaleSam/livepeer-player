import { Player } from "@livepeer/react";
import { parseArweaveTxId, parseCid } from "livepeer/media";

/* Used MUI for the styling box and TextField . */
import { Box, TextField } from "@mui/material";
import { useMemo, useState } from "react";

export const DecentralizedStoragePlayback = () => {
  const [url, setUrl] = useState("");

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);

  return (
    <>
    {/*URL box that takes the IPFS url consisting of video link */}
      <Box>
        <h3>IPFS or Arweave URL</h3>
        <TextField
          type="text"
          placeholder="ipfs://... or ar://"
          onChange={(e) => setUrl(e.target.value)}
        />

        {url && !idParsed && <h1>Provided value is not a valid identifier.</h1>}
      </Box>


      <br />
      {/* Livepeer Player that plays the video from the url */}
      {idParsed && (
        <Player
          title={idParsed.id}
          src={url}
          autoPlay
          muted
          autoUrlUpload={{ fallback: true, ipfsGateway: "https://w3s.link" }}
        />
      )}
    </>
  );
};
