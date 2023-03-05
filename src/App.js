import '../src/resources/global.css';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
