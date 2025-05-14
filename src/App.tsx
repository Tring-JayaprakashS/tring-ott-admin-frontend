import './App.css';
import './index.css';
import './styles/fonts.scss';
import Router from './routes/routes';
import './styles/globals.scss';
import AuthProvider from './context/Authcontext';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
