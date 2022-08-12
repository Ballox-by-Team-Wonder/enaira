import { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/navigation/navbar.component'
import Affidavit from './pages/affidavit/affidavit.component';
import Dashboard from './pages/dashboard/dashboard.component';
import GetALawyer from './pages/get-a-lawyer/get-a-lawyer.component';
import Kyc from './pages/kyc/kyc.component';
import MakeARequest from './pages/make-a-request/make-a-request.component';
import Payout from './pages/payout/payout.component';
import Profile from './pages/profile/profile.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';

import { userToken } from './services/auth.service'

import { getLoggedInUser } from './redux/auth/auth.slice'


function App() {
  const dispatch = useDispatch()
  const _getLoggedInUser = useCallback(() => dispatch(getLoggedInUser()), [dispatch])

  useEffect(() => {
    if (userToken) {
      _getLoggedInUser()
    }
  }, [_getLoggedInUser])

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/affidavit" element={<Affidavit />} />
        <Route path="/get-a-lawyer" element={<GetALawyer />} />
        <Route path="/make-a-request" element={<MakeARequest />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
