import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

const Auth = () => {
    const[curAuth, setCurAuth] = useState<string>('login');
  return (
    <div>
        {curAuth === 'login' ? <Login setState={setCurAuth} /> : <SignUp setState={setCurAuth}/>}
    </div>
  )
}

export default Auth