"use client"

import { Input } from '@/components/UI/input/input'
import cl from './signupForm.module.scss'
import { ChangeEvent, MouseEvent, useState } from 'react';
import { RegisterData } from '@/types';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/UI/button/button';
import { AuthService } from '@/services/authService';
import { signIn } from 'next-auth/react';

const authService = new AuthService()

export const SignupForm = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSignup = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const data: RegisterData = { name: inputs.name, email: inputs.email, password: inputs.password }
      const res = await authService.register(data);

      if (res !== null) {
        const credentials = { email: inputs.email, password: inputs.password }
        await signIn('credentials', credentials)
        setMessage(`Success`);
        router.push("/")
      } else {
        setMessage(`Error`);
      }
    } catch (error) {
      console.error('Registration failed', error);
      setMessage('Registration failed. Please try again.');
    }
  }

  return (
    <form className={cl.form}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={inputs.name}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="email"
        placeholder="mail@example.com"
        value={inputs.email}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleInputChange}
      />
      <Button onClick={e => handleSignup(e)}>Sign Up</Button>
      {message && <p>{message}</p>}

    </form>
  )
}
