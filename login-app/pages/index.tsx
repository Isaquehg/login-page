import React, { useState } from 'react';
import {login} from '../utils/auth'
import { useRouter } from 'next/router';
import styles from './index.module.css';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); // State variable to track login errors
  const router = useRouter(); // Initialize the router

  const handleLogin = () => {
    // Verify the user's registration
    if(login(username, password)){
        router.push('/success'); // Redirect to successful page
    }
    else{
        setLoginError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      {loginError && <p>Login failed. Please check your credentials and try again.</p>}
      <form className={styles.form}>
        <input className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleLogin}>Login</button>
        <Link href="/register">
          <button className={styles.button}>Register</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
