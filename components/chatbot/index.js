import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';

// Define the steps for the chatbot
const steps = [
  {
    id: '1',
    message: 'Hi! I am Alex, your interview assistant. What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I help you today?',
    trigger: 'help',
  },
  {
    id: 'help',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'Thank you for your question. I will try my best to assist you!',
    end: true,
  },
];

// Define a theme for the chatbot
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#8C8AFF',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#8C8AFF',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const ChatbotComponent = () => {
  const { speak, cancel } = useSpeechSynthesis();
  const { listen, listening, stop, transcript } = useSpeechRecognition({
    onResult: (result) => {
      // Process the speech-to-text result if needed
      console.log("User said:", result);
    },
  });

  useEffect(() => {
    // Speak the initial message
    speak({ text: "Hi! I am Alex, your interview assistant. What is your name?" });
  }, [speak]);

  const handleStartListening = () => {
    listen();
  };

  const handleStopListening = () => {
    stop();
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleStartListening} style={{ margin: '10px', padding: '10px' }}>
          Start Listening
        </button>
        <button onClick={handleStopListening} style={{ margin: '10px', padding: '10px' }}>
          Stop Listening
        </button>
        <div style={{ marginTop: '20px' }}>
          <p>Transcript: {transcript}</p>
        </div>
      </div>
      <ChatBot
        steps={steps}
        // Avoid using `component` prop that triggers re-rendering
      />
    </ThemeProvider>
  );
};

export default ChatbotComponent;
