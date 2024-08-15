import React from 'react';
import styles from './style.module.css';
import SocialButton from '../buttonWithIcon';


const RegisterForm = () => {
  const handleGoogleSignIn = () => {
    console.log('Google Sign-In Clicked');
  };

  
  const handleLinkedInSignIn = () => {
    console.log('LinkedIn Sign-In Clicked');
  };

 

  return (
    <div className={styles.loginContainer}>
    <form>
      <div className="form-group">
        <label htmlFor="mail">Email</label>
        <input type="text" id="mail" name="mail" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit" className={styles.registerButton}>REGISTER</button>
      
      <style jsx>{`
        .form-group {
          margin-bottom: 15px; 
        }
        label {
          display: block; 
          margin-bottom: 5px; 
        }
        input {
          width: 100%; 
          padding: 8px; 
        }
      `}</style>
    </form>
      <div>OR</div>
        <SocialButton onClick={handleGoogleSignIn}>
        <div className={styles.buttonContent}>
        <img src="/images/googleIcon.svg"/>
        <span>Sign in with Google</span>
        </div>
      </SocialButton>
      <SocialButton onClick={handleLinkedInSignIn}>
      <div className={styles.buttonContent}>
      <img src="/images/linkedinIcon.svg"/>
        Sign in with LinkedIn
        </div>
      </SocialButton>
    </div>
  );
};

export default RegisterForm;