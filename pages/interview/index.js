// import dynamic from 'next/dynamic';
// import React from 'react';

// Dynamically import the VoiceToText component
// const DynamicVoiceToText = dynamic(() => import('../../components/voiceToText'), { ssr: false });
// const DynamicTextToVoice = dynamic(() => import('../../components/textToVoice'), { ssr: false});




// pages/index.js

import Head from 'next/head';
// import ChatbotComponent from '../components/Chatbot';
import ChatbotComponent from '@/components/chatbot';

export default function Interview() {
  return (
    <div>
      <Head>
        <title>Chatbot App</title>
        <meta name="description" content="A simple chatbot built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ChatbotComponent />
      </main>
    </div>
  );
}
