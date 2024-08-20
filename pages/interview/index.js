import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the VoiceToText component
const DynamicVoiceToText = dynamic(() => import('../../components/voiceToText'), { ssr: false });
const DynamicTextToVoice = dynamic(() => import('../../components/textToVoice'), { ssr: false});



export default function Interview() {
    return (
        <>
           
            <DynamicVoiceToText />
            <DynamicTextToVoice/>
           
        </>
    )
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
