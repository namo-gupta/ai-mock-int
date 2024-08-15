import React from 'react';
import styles from './style.module.css';
import SocialButton from '../buttonWithIcon';


const Login = () => {
  const handleGoogleSignIn = () => {
    console.log('Google Sign-In Clicked');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook Sign-In Clicked');
  };

  const handleLinkedInSignIn = () => {
    console.log('LinkedIn Sign-In Clicked');
  };

  const handleMicrosoftSignIn = () => {
    console.log('Microsoft Sign-In Clicked');
  };

  const handleAppleSignIn = () => {
    console.log('Apple Sign-In Clicked');
  };

  return (
    <div className={styles.loginContainer}>
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
      <SocialButton onClick={handleMicrosoftSignIn}>
      <div className={styles.buttonContent}>
      <img src="/images/microsoftIcon.svg"/>
        Sign in with Microsoft
        </div>
      </SocialButton>
      <SocialButton onClick={handleAppleSignIn}>
      <div className={styles.buttonContent}>
      <img src="/images/appleIcon.svg"/>
        Sign in with Apple
        </div>
      </SocialButton>
      <SocialButton onClick={handleFacebookSignIn} >
      <div className={styles.buttonContent}>
      <img src="/images/facebookIcon.svg"/>
        Sign in with Facebook
        </div>
      </SocialButton>
      <div className={styles.additionalInfo}>
      <p>If you don’t have an account please</p>
      <p className={styles.registerLink}><a>REGISTER</a></p>
      </div>
    </div>
  );
};

export default Login;
