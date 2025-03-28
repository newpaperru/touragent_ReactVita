import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./services/AuthContext";
import { PageHome } from "./pages/HomePage";
import { PageAbout } from "./pages/AboutPage";
import { PageProfile } from "./pages/ProfilePage";
import { PageRegistration } from "./pages/RegistrationPage";
import { PageLogin } from "./pages/LoginPage";
import { SearchPage } from "./pages/SearchPage";

function App() {
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem('isAuth') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isAuth', isAuth);
    }, [isAuth]);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/profile" element={<PageProfile />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route
                        path="/registration"
                        element={<PageRegistration />}
                    />
                    <Route path="/login" element={<PageLogin />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
