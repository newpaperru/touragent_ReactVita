import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./services/AuthContext";
import { PageHome } from "./pages/HomePage";
import { PageAbout } from "./pages/AboutPage";
import { PageProfile } from "./pages/ProfilePage";
import { PageRegistration } from "./pages/RegistrationPage";
import { PageLogin } from "./pages/LoginPage";
import { SearchPage } from "./pages/SearchPage";
import { ExplorePage } from "./pages/ExplorePage";
import { AdminPanel } from "./pages/AdmimPanel";


function App() {
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem("isAuth") === "true";
    });

    const [userRole, setUserRole] = useState(() => {
        return localStorage.getItem("userRole") || null;
    });

    const [tours, setTours] = useState([]);

    useEffect(() => {
        localStorage.setItem("isAuth", isAuth);
        localStorage.setItem("userRole", userRole);

        const fetchTours = async () => {
            try {
                const response = await fetch("http://localhost:3000/archive");
                if (response.ok) {
                    const data = await response.json();
                    setTours(data);
                }
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };

        fetchTours();
    }, [isAuth, userRole]);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                userRole,
                setUserRole,
                tours,
                setTours,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route
                        path="/profile"
                        element={
                            isAuth ? <PageProfile /> : <Navigate to="/login" />
                        }
                    />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/explore/:id" element={<ExplorePage />} />
                    <Route
                        path="/registration"
                        element={<PageRegistration />}
                    />
                    <Route path="/login" element={<PageLogin />} />
                    <Route
                        path="/admin"
                        element={
                            isAuth && userRole === "admin" ? (
                                <AdminPanel />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
