// import React, { useState, useEffect } from 'react';
// import TextToVoice from '../textToVoice';
// import VoiceToText from '../voiceToText';


// const ChatBot = () => {
//   const [chat, setChat] = useState([]);
//   const [step, setStep] = useState(0);
//   const [isListening, setIsListening] = useState(false);

//   const conversation = [
//     { question: "Hi, what is your name?", key: 'name' },
//     { question: "How are you?", key: 'feeling' },
//     { question: "What is your current location?", key: 'location' },
//   ];

//   const handleFinalTranscript = (transcript) => {
//     setChat([...chat, { speaker: 'User', text: transcript }]);
//     setStep(step + 1);
//   };

//   useEffect(() => {
//     if (step < conversation.length) {
//       const currentStep = conversation[step];
//       setChat([...chat, { speaker: 'Alex', text: currentStep.question }]);
//       setIsListening(true);
//     }
//   }, [step, conversation, chat]);

//   return (
//     <div>
//       {chat.map((line, index) => (
//         <div key={index}>
//           <strong>{line.speaker}:</strong> {line.text}
//         </div>
//       ))}
//       {isListening && <VoiceToText onFinalTranscript={handleFinalTranscript} />}
//       {step < conversation.length && (
//         <TextToVoice text={conversation[step].question} />
//       )}
//     </div>
//   );
// };

// export default ChatBot;
