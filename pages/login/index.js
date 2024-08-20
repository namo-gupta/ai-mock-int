import React from 'react';
import Header from '@/components/header';
import Popup from '@/components/popUp';
import Login from '@/components/loginForm';


const LoginPage = () => {
  return (
    <>
    <Header/>
    <div>
      <Popup title="Login AI Mock" description="Prepare, Practice, and Perfect with InterviewPro AI – Your Personal Interview Coach.">
        <Login />
      </Popup>
    </div>
    </>
  );
};

export default LoginPage;

