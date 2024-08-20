import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToVoice = () => {
  const [text, setText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    setIsClient(true); // This will trigger after the component is mounted
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Text to Voice Converter</h1>
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
        onClick={() => speak({ text })}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Convert to Voice
      </button>
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
