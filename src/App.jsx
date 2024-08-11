import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/noPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MarketPlace from "./pages/MarketPlace";
import Profile from "./pages/Profile";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeBookContext from "./bookContext/homeBookContext";
import BooksForUProvider from "./bookContext/BooksForUContext";
import FavouriteBooksProvider from "./bookContext/FavouriteBooksContext";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <HomeBookContext>
        <BooksForUProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/market-place" element={<MarketPlace />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </BrowserRouter>
        </BooksForUProvider>
      </HomeBookContext>
    </>
  );
}

export default App;
