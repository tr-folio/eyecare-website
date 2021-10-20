import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import ConfirmVisit from './Components/ConfirmVisit/ConfirmVisit';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Signup from './Components/Signup/Signup';
import VisitTime from './Components/VisitTime/VisitTime';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/serviceDetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/confirmVisit">
              <ConfirmVisit></ConfirmVisit>
            </PrivateRoute>
            <PrivateRoute path="/visitTime">
              <VisitTime></VisitTime>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
