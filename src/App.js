import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AdminBuilding from './components/Admin/AdminBuilDing';
import CreatBuilding from './components/Building/CreatBuilding';
import AdminUser from './components/Admin/AdminUser';
import AdminPost from './components/Admin/AdminPost';
import { history } from './redux/util/setting';
import { AdminTemplate } from './templates/AdminTemplate';
import Profile from './components/Home/Profile';
import Cart from './components/Cart/Cart';
import { UserTemplate } from './templates/UserTemplate';



function App () {
  return (
    <BrowserRouter  >
      <Switch>
        <Route exact path="/login" component={Login} />
        <UserTemplate exact path="/home" Component={Home} />
        <AdminTemplate exact path="/adminbuilding" Component={AdminBuilding} />
        <AdminTemplate exact path="/adminuser" Component={AdminUser} />
        <AdminTemplate exact path="/creatbuilding" Component={CreatBuilding} />
        <AdminTemplate exact path="/adminpost" Component={AdminPost} />
        <UserTemplate exact path="/profile" Component={Profile} />
        <UserTemplate exact path="/cart" Component={Cart} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
