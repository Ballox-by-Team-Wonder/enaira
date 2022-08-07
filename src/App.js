import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/navigation/navbar.component'
import Affidavit from './pages/affidavit/affidavit.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Kyc from './pages/kyc/kyc.component';
import Payout from './pages/payout/payout.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';


function App() {

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
