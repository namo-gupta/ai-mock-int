// import React, { useState, useEffect } from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const TextToVoice = () => {
//   const [text, setText] = useState('');
//   const { speak, speaking, supported } = useSpeechSynthesis();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); 
//   }, []);

//   if (!supported) {
//     return <p>Your browser does not support speech synthesis.</p>;
//   }

//   if (!isClient) {
//     return null; 
//   }

//   const handleTextToSpeech = () => {
//     console.log(":ihi")
//     if (text.trim() === '') {
//       alert("Please enter some text.");
//       return;
//     }
//     if (!speaking) {
//       speak({ text });
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Text to Voice Converter</h1>
//       <textarea
//         rows="4"
//         cols="50"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text to convert to speech"
//         style={{ padding: '10px', fontSize: '16px', marginTop: '20px' }}
//       />
//       <br />
//       <button
//         onClick={handleTextToSpeech}
//         style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
//       >
//         Convert to Voice
//       </button>
//     </div>
//   );
// };

// export default TextToVoice;



import React, { useState, useEffect, useRef } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToVoice = ({ textMessage }) => {
  const [text, setText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const { speak } = useSpeechSynthesis();
  const lastTextMessageRef = useRef('');  

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (textMessage && textMessage !== lastTextMessageRef.current) {
      speak({ text: textMessage });
      lastTextMessageRef.current = textMessage;  
    }
  }, [textMessage, speak]);

  if (!isClient) {
    return null; 
  }

  const textVoice = () => {
    if (text) {
      speak({ text });
    }
  };

  return (
    <div >
      {/* <h1>Text to Voice Converter</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert to speech"
        style={{ padding: '10px', fontSize: '16px', marginTop: '20px' }}
      />
      <br />
      <button
        onClick={textVoice}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Convert to Voice
      </button> */}
    </div>
  );
};

export default TextToVoice;



// import React from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const TextToVoice = ({ text }) => {
//   const { speak } = useSpeechSynthesis();

//   React.useEffect(() => {
//     if (text) {
//       speak({ text });
//     }
//   }, [text, speak]);

//   return null;
// };

// export default TextToVoice;
