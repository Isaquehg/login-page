// pages/register.tsx
import React, { useState } from 'react';
import { register } from '../utils/auth';
import { useRouter } from 'next/router';
import styles from './register.module.css';

const RegisterPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    // Check if all required fields are filled
    if (firstName && lastName && username && password) {
      // If all required fields are filled, register the user
      register(username, password);
      // Redirect to the login page
      router.push('/');
    } else {
      // If any required field is missing, set the registration error state to true
      setRegistrationError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      {registrationError && <p className={styles.alert}>Please fill in all required fields.</p>}
      <form className={styles.form}>
        <input className={styles.input}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input className={styles.input}
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <button className={styles.button} onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
