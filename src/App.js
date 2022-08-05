import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navigation } from './components/navigation/navigation.component'
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';


function App() {

  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        {/* <Route index path="/" element={<Home />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
