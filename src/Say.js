import { useState } from "react";

function Say() {

  return (
    <div className="App">
      <h1>React Text to Speech App</h1>

      <audio controls>
        <source
          src={`http://208.109.188.242:5003/api/tts?voice=en-us/southern_english_female-glow_tts&text=${"Helo How are you doing great!"}&vocoder=hifi_gan%2Funiversal_large&denoiserStrength=0.002&noiseScale=0.667&lengthScale=0.85&ssml=false`}
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Say;
