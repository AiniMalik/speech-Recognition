import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
}
    if (!isMicrophoneAvailable) {
      // Render some fallback content
    return <span>False speech recognition.</span>;
    }
  
  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p style={{ color: "black" }}>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
