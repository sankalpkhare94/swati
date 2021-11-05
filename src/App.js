import Layout from './layout';
import ProductDetails from './components/ProductDetails'
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/details" element={<ProductDetails />} />
    </Routes>
    </>

  );
}

export default App;
