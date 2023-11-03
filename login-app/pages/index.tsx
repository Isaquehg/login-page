import React from 'react';
import LoginForm from '@/components/LoginForm';
import Link from 'next/link';
import { register } from 'module';

const LoginPage: React.FC = () => {
  return (
    <>
      <LoginForm/>
      <div id='registerContainer'>
          <Link href="./register"><button>Register</button></Link>
      </div>
    </>
  );
};

export default LoginPage;
