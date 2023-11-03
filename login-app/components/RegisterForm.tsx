import { register } from '@/utils/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './forms.module.css'

const RegisterForm: React.FC = () => {
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
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
