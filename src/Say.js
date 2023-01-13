import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function Say() {

  return (
    <div className="App">
      <h1>React Text to Speech App</h1>

      <ReactAudioPlayer
          src={`http://208.109.188.242:5003/api/tts?voice=en-us/southern_english_female-glow_tts&text=${"Helo How are you doing great!"}&vocoder=hifi_gan%2Funiversal_large&denoiserStrength=0.002&noiseScale=0.667&lengthScale=0.85&ssml=true`}
        autoPlay
        controls
        />
    </div>
  );
}

export default Say;
