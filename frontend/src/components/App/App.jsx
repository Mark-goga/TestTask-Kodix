import LoginPage from '../../pages/LoginPage/LoginPage'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import HomePage from '../../pages/HomePage/HomePage';
import RestrictedRoute from '../RestrictedRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operation';
import { selecIsRefreshing } from '../../redux/auth/selector';
import RefreshPage from "../../pages/RefreshPage/RefreshPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";

export default function App() {
  const isRefreshing = useSelector(selecIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    async function hanldeRefreshUser () {
      await dispatch(refreshUser());
    }
    hanldeRefreshUser();
  }, [dispatch]);

  return isRefreshing ? <RefreshPage /> : (
    <div>
        <Routes>
          {/*<Route path='/' element={<RestrictedRoute component={<LoginPage />} redirectTo={'/home'}/>}/>*/}
          <Route path='/signin' element={<RestrictedRoute component={<LoginPage />} redirectTo={'/home'}/>}/>
          <Route path='/signup' element={<RestrictedRoute component={<RegisterPage />} redirectTo={'/home'}/>}/>
          <Route path='/home' element={<PrivateRoute component={<HomePage />} redirectTo={'/signin'}/>} />
        </Routes>
    </div>
  );
}