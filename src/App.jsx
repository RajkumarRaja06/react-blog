import Home from './pages/Home';
import Login from './pages/Login';
import { UserConsumer } from './context/userContext.jsx';

const App = () => {
  const { isAuth } = UserConsumer();
  return <main>{isAuth ? <Home /> : <Login />}</main>;
};

export default App;
