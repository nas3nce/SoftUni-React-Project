import { Path } from './constants/path';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { ResourceProvider } from './contexts/resourceContext';
import { ModalProvider } from './contexts/modalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../public/styles/style.scss';

import UserGuard from './guards/userGuard';
import AuthGuard from './guards/authGuard';


import Header from './components/mainComponents/header/Header';
import Footer from './components/mainComponents/footer/Footer';
import Login from './components/userComponents/login/Login';
import Register from './components/userComponents/register/Register';
import Home from './components/mainComponents/home/Home';
import Catalog from './components/resourceComponents/catalog/Catalog';
import Create from './components/resourceComponents/create/Create';
import Details from './components/resourceComponents/details/Details';
import Profile from './components/userComponents/profile/Profile';
import Logout from './components/userComponents/logout/Logout';
import PageNotFound from './components/errorComponents/pageNotFound/PageNotFound';
import Edit from './components/resourceComponents/edit/Edit';
import { ErrorProvider } from './contexts/errorContext';
import ErrorBoundary from './components/errorComponents/errorBoundary/ErrorBoundary';

function App() {

  return (
    <>
      <ErrorBoundary>
        <ErrorProvider>
          <AuthProvider>
            <ResourceProvider>
              <ModalProvider>
                <Header />
                <div className="site">
                  <Routes>

                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Catalog} element={<Catalog />} />
                    <Route path={Path.Details} element={<Details />} />
                    <Route path={Path.Error} element={<PageNotFound />} />

                    <Route element={<AuthGuard />}>
                      <Route path={Path.Create} element={<Create />} />
                      <Route path={Path.Edit} element={<Edit />} />
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
              </ModalProvider>
            </ResourceProvider>
          </AuthProvider>
        </ErrorProvider>
      </ErrorBoundary >
    </>
  );
}

export default App;
