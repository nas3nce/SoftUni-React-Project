import { Path } from './constants/path';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../public/styles/style.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Create from './components/create/Create';
import Details from './components/details/Details';
import Profile from './components/profile/Profile';


function App() {

  return (
    <>
      <Header />
      <div className="site">
        <Routes>

          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Catalog} element={<Catalog />} />
          <Route path={Path.Create} element={<Create />} />
          <Route path={Path.Details} element={<Details />} />
          <Route path={Path.Profile} element={<Profile />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
