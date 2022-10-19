import logo from './logo.svg';
import './App.css';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';
import { LoginButton } from './Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated}= useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated?<>
          <Profile/>
          <LogoutButton/>
        </>:
          <LoginButton/>}
      </header>
    </div>
  );
}

export default App;
