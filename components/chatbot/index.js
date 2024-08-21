import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const Chatbot = ({ userText, onBotResponse }) => {
  const [messages, setMessages] = useState([]); // To store the full message history
  const [recentMessage, setRecentMessage] = useState(''); // To store the most recent user message

  useEffect(() => {
    if (userText) {
      // Store the most recent user message
      setRecentMessage(userText);

      // Add the user's message to the chat history
      setMessages((prev) => [...prev, { sender: 'user', text: userText }]);

      // Simulate a bot response after a delay
      setTimeout(() => {
        const botResponse = 'This is a bot response.';
        setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);

        // Send bot response to the TextToVoice component for conversion to speech
        onBotResponse(botResponse);
      }, 1000);
    }
  }, [userText, onBotResponse]);

  return (
    <div className={styles.chatContainer}>
     
      {messages.map((message, index) => (
        <div
          key={index}
          className={message.sender === 'user' ? styles.userMessage : styles.botMessage}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default Chatbot;








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
