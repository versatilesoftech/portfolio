import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/header";
import Hero from "./pages/hero/hero";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'; 

function App() {
  const [loading, setLoading] = useState(true);
  Aos.init();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3800);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
