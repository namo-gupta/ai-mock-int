import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styles from './style.module.css';
import Chatbot from '@/components/chatbot';
import { getResponse } from '../utils/fetchUtils';
import { useRouter } from 'next/router';

const DynamicVoiceToText = dynamic(() => import('../../components/voiceToText'), { ssr: false });
const DynamicTextToVoice = dynamic(() => import('../../components/textToVoice'), { ssr: false });

export default function Interview() {
  const router = useRouter();
  const [conversation, setConversation] = useState([
   
  ]);

  const [userText, setUserText] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [showFeedback,setShowFeedback] =useState(false);

  const fetchResponse = async (text) => {
    const updatedConversation = [
      ...conversation,
      { role: "user", content: [{ text }] },
    ];

    const response = await getResponse(updatedConversation);

    setConversation([
      ...updatedConversation,
      { role: "model", content: [{ text: response.candidate[0].content[0].text }] },
    ]);
    // if(response?.candidate[0]?.lastTurn){
    //   router.push('/feedback');
    // }

    setBotResponse(response.candidate[0].content[0].text);
  };

  const handleUserText = (text) => {
    setUserText(text);
    fetchResponse(text); 
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.audioScreen}>
          <DynamicVoiceToText onUserText={handleUserText} />
          <DynamicTextToVoice textMessage={botResponse} />
        </div>
        <div className={styles.chatBot}>
          <Chatbot userText={userText} botResponse={botResponse} />
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
