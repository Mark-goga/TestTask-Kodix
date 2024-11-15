import LoginPage from '../../pages/LoginPage/LoginPage'
import {Route, Routes} from "react-router-dom";
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {refreshUser} from '../../redux/auth/operation';
import {selecIsRefreshing} from '../../redux/auth/selector';
import RefreshPage from "../../pages/RefreshPage/RefreshPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";
import Layout from "../Layout/Layout.jsx";
import BlogPage from "../../pages/BlogPage/BlogPage.jsx";
import BlogDetailsPage from "../../pages/BlogDetailsPage/BlogDetailsPage.jsx";

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
          <Route path='/' element={<RestrictedRoute component={<LoginPage />} redirectTo={'/blog'}/>}/>
        <Route path='/signin' element={<RestrictedRoute component={<LoginPage/>} redirectTo={'/blog'}/>}/>
        <Route path='/signup' element={<RestrictedRoute component={<RegisterPage/>} redirectTo={'/blog'}/>}/>
        <Route element={<Layout/>}>
          <Route path='/blog' element={<BlogPage />}/>
          <Route path='/blog/:blogId' element={<PrivateRoute component={<BlogDetailsPage />} redirectTo={'/signin'}/>}/>
        </Route>
        </Routes>
    </div>
  );
}