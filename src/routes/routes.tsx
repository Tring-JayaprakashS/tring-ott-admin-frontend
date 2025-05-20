import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import Setting from '../pages/Setting/Setting';
import SignIn from '../pages/auth/SignIn/SignIn';
import ForgetPassword from '../pages/auth/forgetPassword/ForgetPassword';
import HelpSupport from '../pages/HelpSupport/HelpSupport';
import AuthFrame from '../pages/auth/AuthFrame/AuthFrame';
import { useAUth } from '../context/Authcontext';
import ProtectedRoute from './ProtectedRoute';
import ResetPassword from '../pages/auth/resetPassword/resetPassword';
import ManageClients from '../pages/ManageClients/ManageClients';
import Subscriptions from '../pages/Subscriptions/Subscriptions';
import { ClientList } from '../pages/ClientList/ClientList';
import AuditLogs from '../pages/AuditLogs/AuditLogs';
import MenuList from '../pages/MenuList/MenuList';

const Router = () => {
  const { currentUser } = useAUth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AuthFrame />}>
          <Route index element={<Navigate to='signin' replace />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
        </Route>
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }>
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<Dashboard />} />

          <Route path='manage-clients' element={<ManageClients />} />
          <Route path='manage-clients/add-clients' element={<MenuList />} />

          <Route path='subscriptions' element={<Subscriptions />} />
          <Route path='clien-list' element={<ClientList />} />
          <Route path='audit-logs' element={<AuditLogs />} />
          <Route path='help&support' element={<HelpSupport />} />
          <Route path='settings' element={<Setting />} />
        </Route>

        <Route
          path='*'
          element={
            currentUser ? (
              <Navigate to='/home/dashboard' />
            ) : (
              <Navigate to='/signin' />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
