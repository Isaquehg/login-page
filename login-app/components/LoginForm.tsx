import { login } from '@/utils/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './forms.module.css'

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); // State variable to track login errors
  const router = useRouter(); // Initialize the router

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Verify the user's registration
    if (login(username, password)) {
      router.push('/success'); // Redirect to successful page
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form}>
        <div>
          <input
            type="text"
            placeholder='Username'
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button className={styles.button} onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
