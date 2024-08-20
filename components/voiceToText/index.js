import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  console.log(listening,'19');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Voice to Text</h1>
      <p>Microphone: {listening ? 'On' : 'Off'}</p>
      <button onClick={startListening} style={{ margin: '10px', padding: '10px' }}>Start</button>
      <button onClick={stopListening} style={{ margin: '10px', padding: '10px' }}>Stop</button>
      <button onClick={resetTranscript} style={{ margin: '10px', padding: '10px' }}>Reset</button>
      <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>Transcript:</p>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px', minHeight: '100px' }}>
        {transcript}
      </div>
    </div>
  );
};

export default VoiceToText;





// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const VoiceToText = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Your browser does not support speech recognition.</span>;
//   }

//   const startListening = () => SpeechRecognition.startListening({ continuous: true });
//   const stopListening = () => SpeechRecognition.stopListening();

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Voice to Text</h1>
//       <p>Microphone: {listening ? 'On' : 'Off'}</p>
//       <button onClick={startListening} style={{ margin: '10px', padding: '10px' }}>Start</button>
//       <button onClick={stopListening} style={{ margin: '10px', padding: '10px' }}>Stop</button>
//       <button onClick={resetTranscript} style={{ margin: '10px', padding: '10px' }}>Reset</button>
//       <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>Transcript:</p>
//       <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px', minHeight: '100px' }}>
//         {transcript}
//       </div>
//     </div>
//   );
// };

// export default VoiceToText;






// import React, { useEffect } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const VoiceToText = ({ onFinalTranscript }) => {
//   const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

//   useEffect(() => {
//     if (!listening && transcript) {
//       onFinalTranscript(transcript);
//       resetTranscript();
//     }
//   }, [transcript, listening, onFinalTranscript, resetTranscript]);

//   useEffect(() => {
//     SpeechRecognition.startListening({ continuous: true });
//   }, []);

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Your browser does not support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? 'On' : 'Off'}</p>
//     </div>
//   );
// };

// export default VoiceToText;

