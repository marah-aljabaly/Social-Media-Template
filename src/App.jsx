import './App.css'
import MainFooter from './component/ui/layout/MainFooter'
import MainHeader from './component/ui/layout/MainHeader'
import Mhome from './component/pages/HomePage/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import LoginPage from './component/pages/LoginPage/LoginPage';
import RequistPage from './component/pages/RequistPage';
import NotiPage from './component/pages/NotiPage';
import NotFound from './component/pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <MainHeader/>
        <Routes>
          <Route path="/" element={<Mhome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/requist" element={<RequistPage />} />
          <Route path="/notification" element={<NotiPage />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <MainFooter/>
      </BrowserRouter>
    </>
  )
}

export default App
