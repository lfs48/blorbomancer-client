import { 
    Routes,
    Route,
    BrowserRouter
 } from "react-router-dom";
import Landing from "@pages/landing";
import Register from "../pages/register";
import AuthRoute from "./auth.route";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/"
                    element={
                        <AuthRoute>
                            <Landing />
                        </AuthRoute>
                    }
                />
                <Route 
                    path="/register"
                    element={
                        <AuthRoute>
                            <Register />
                        </AuthRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}