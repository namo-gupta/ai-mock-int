import React, { useState } from 'react';
import Popup from '@/components/popUp';
import RegisterForm from '@/components/registerForm';  


const RegisterPage = () => {

  return (
    <div>
      <Popup title="Register AI Mock" description="Prepare, Practice, and Perfect with InterviewPro AI – Your Personal Interview Coach.">
        <RegisterForm />
      </Popup>
    </div>
  );
};

export default RegisterPage;