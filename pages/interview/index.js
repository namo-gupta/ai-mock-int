import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styles from './style.module.css';
import Chatbot from '@/components/chatbot';

const DynamicVoiceToText = dynamic(() => import('../../components/voiceToText'), { ssr: false });
const DynamicTextToVoice = dynamic(() => import('../../components/textToVoice'), { ssr: false });

export default function Interview() {
  const [userText, setUserText] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleUserText = (text) => {
    setUserText(text);
  };

  const handleBotResponse = (response) => {
    setBotResponse(response);
  };

  return (
    <> 
      <div className={styles.container}>
        <div className={styles.audioScreen}>
          <DynamicVoiceToText onUserText={handleUserText} />
          <DynamicTextToVoice />
        </div>
        <div className={styles.chatBot}>
          <Chatbot userText={userText} onBotResponse={handleBotResponse} />
        </div>
      </div>

    </>
  );
}




// import dynamic from 'next/dynamic';


// const ChatBot = dynamic(() => import("../../components/chatbot"), {
//   ssr: false
// });

// export default function Interview() {
//   return (
//     <div>
//       <ChatBot />
//     </div>
//   );
// }
