import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

const Auth = () => {
    const[curAuth, setCurAuth] = useState<string>('login');
    const [snackbarMessage, setSnackbarMessage] = useState<string>("");
      const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
      const handleSnackbarClose = () => {
        setSnackbarOpen(false);
      };
  return (
    <div>
        {curAuth === 'login' ? <Login setState={setCurAuth} /> : <SignUp setState={setCurAuth}/>}
    </div>
  )
}

export default Auth