import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteConstant from "./utils/constants/RouteConstant";
import { Login, Logout, Profile } from "./pages";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path={RouteConstant.HOME} element={<Login />} />
        <Route path={RouteConstant.LOGIN} element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path={RouteConstant.PROFILE} element={<Profile />} />
        </Route>

        {/* Logout Route */}
        <Route path={RouteConstant.LOGOUT} element={<Logout />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
