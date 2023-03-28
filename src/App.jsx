import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";

import AddCard from "Card/AddCard";
import Card from "Card/Card";
import { Nav, PrivateRoute } from "_components";
import { history } from "_helpers";
import { Home } from "home";
import { Login } from "login";

export { App };

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="app-container bg-light">
      <Nav />
      <div className="container pt-4 pb-4">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cards"
            element={
              <PrivateRoute>
                <Card />
              </PrivateRoute>
            }
          />
          <Route
            path="/cards/new"
            element={
              <PrivateRoute>
                <AddCard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
