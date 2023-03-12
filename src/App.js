import '../src/resources/global.css';
import Loader from './components/Loader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Galery from './page/Galery';
import Contact from './page/Contact';
import Impresum from './page/Impresum';
import Privacy from './page/Privacy';
import { useSelector } from 'react-redux';


function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <div>
      {loading && <Loader />}
      <BrowserRouter>

        <Routes>

          <Route path="/" element={
            <Home />
          } />

          <Route path="/galery" element={
            <Galery />
          } />

          <Route path="/contact" element={
            <Contact />
          } />

          <Route path="/privacy" element={
            <Privacy />
          } />

          <Route path="/impresum" element={
            <Impresum />
          } />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
