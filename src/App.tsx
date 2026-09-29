import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SessionsPage from './pages/SessionsPage';
import PartnersPage from './pages/PartnersPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
