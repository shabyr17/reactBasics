import './App.css';

import LoginFormContainer from './components/LoginFormContainer.component';
import SignUpContainer from './components/SignUpContainer.component';

import { useState } from 'react';

function App() {
  const [classList, setClassList] = useState("container");

  const handleCLickSignIn = () => {
    setClassList("container")
  }
  const handleCLickSignUp = () => {
    setClassList("container right-panel-active")
  }

  return (
    
    <>
      <div className={classList} id="container" >
        <SignUpContainer handleCLickSignIn={handleCLickSignIn} handleCLickSignUp={handleCLickSignUp} />
        <LoginFormContainer />
      </div>
    </>
  );
}

export default App;
