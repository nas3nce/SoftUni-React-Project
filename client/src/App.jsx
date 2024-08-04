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
import { AuthProvider } from './contexts/authContext';
import Logout from './components/logout/Logout';
import PageNotFound from './components/pageNotFound/PageNotFound';
import AuthGuard from './guards/authGuard';
import UserGuard from './guards/userGuard';


function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <div className="site">
          <Routes>

            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Catalog} element={<Catalog />} />
            <Route path={Path.Details} element={<Details />} />
            <Route path={Path.Error} element={<PageNotFound />} />

            <Route element={<AuthGuard />}>
              <Route path={Path.Create} element={<Create />} />
              <Route path={Path.Profile} element={<Profile />} />
              <Route path={Path.Logout} element={<Logout />} />
            </Route>

            <Route element={<UserGuard />}>
              <Route path={Path.Login} element={<Login />} />
              <Route path={Path.Register} element={<Register />} />
            </Route>



          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
