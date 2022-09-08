import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";
import Auth0ProviderWithHistory from "./Auth0Provider";
function App() {
  return (
    <Auth0ProviderWithHistory>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          React Auth0
          <br />
          <br />
          <LoginButton />
          <LogoutButton />
          <Profile />
        </header>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
