import '../src/resources/global.css';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Galery from './page/Galery';
import Contact from './page/Contact';
import Impresum from './page/Impresum';

function App() {

  const { loading } = useSelector(state => state.alerts);

  return (
    <div>
      {/* Loading */}

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

          <Route path="/impresum" element={
            <Impresum />
          } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
