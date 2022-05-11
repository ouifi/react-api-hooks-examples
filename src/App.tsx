import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Example1 } from 'components/Example1';
import { AuthContext, AuthProvider } from 'context/authContext';

const Protector = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, attemptSignIn, triggerSignOut } = useContext(AuthContext);

  return <>
    {
      isAuthenticated
        ? <>
          {children}
          <button style={{ backgroundColor: "yellow", color: "#61dafb", padding: 10, fontSize: "larger", borderRadius: "5px", border: "none" }} onClick={() => triggerSignOut()}>
            Log Out
          </button>
        </>
        : <>
          <span>Click the button to see cool Chuck Norris facts!</span>
          <button style={{ backgroundColor: "#61dafb", color: "yellow", padding: 10, fontSize: "larger", borderRadius: "5px", border: "none" }} onClick={() => attemptSignIn()}>
            Log In
          </button>
        </>
    }
  </>;
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <Protector>
            <img src={logo} className="App-logo" alt="logo" />
            <Example1 />
          </Protector>
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
