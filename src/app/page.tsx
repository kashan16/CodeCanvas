"use client"

import { BrowserRouter } from 'react-router-dom';
import LoginForm from './_auth/LoginForm';

export default function Home() {

  return (
    <BrowserRouter>
      <div className='App'>
        <LoginForm/>
      </div>
    </BrowserRouter>
  );
}
