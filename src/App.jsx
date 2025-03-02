import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./services/AuthContext";
import { PageHome } from "./pages/PageHome";
import { PageAbout } from "./pages/PageAbout";
import { PageProfile } from "./pages/PageProfile";
import { PageRegistration } from "./pages/PageRegistration";
import { PageLogin } from "./pages/PageLogin";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/profile" element={<PageProfile />} />
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
