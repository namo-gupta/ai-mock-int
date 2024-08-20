import React from 'react';
import Header from '@/components/header';
import Popup from '@/components/popUp';
import RegisterForm from '@/components/registerForm';  


const RegisterPage = () => {

  return (
    <>
    <Header/>
    <div>
      <Popup title="Register AI Mock" description="Prepare, Practice, and Perfect with InterviewPro AI – Your Personal Interview Coach.">
        <RegisterForm />
      </Popup>
    </div>
    </>
  );
};

export default RegisterPage;