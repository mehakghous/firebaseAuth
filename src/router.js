import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './views/signUpView';
import Login from './views/loginView';
import DashBoard from './views/dashboard';
import MainLayout from './layout';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(store => store.User.user);

  return (
    <BrowserRouter>
      <Routes>
        {user ?
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<DashBoard />} />
          </Route>
          :
          <Route path="/" element={<Navigate to="/login" />} />
        }
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
