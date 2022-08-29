import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import LandingPage from './Pages/LandingPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<LandingPage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
