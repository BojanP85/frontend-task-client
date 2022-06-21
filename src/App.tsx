import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { getUserState } from "./redux/selectors/user";
import { RequireAuth } from "./utils/requireAuth";

const App = () => {
  const { user } = useSelector(getUserState);

  const isLogged = localStorage.getItem("loggedUser");

  return (
    <Router>
      <Routes>
        <Route
          path="/signin"
          element={isLogged && user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
