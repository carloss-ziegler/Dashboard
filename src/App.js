import "./App.css";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <>
        <ToastContainer autoClose={2700} />
      </>
      <Router>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequiredAuth>
                  <Home />
                </RequiredAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequiredAuth>
                    <List />
                  </RequiredAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequiredAuth>
                    <Single />
                  </RequiredAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequiredAuth>
                    <New
                      inputs={userInputs}
                      title="Realizar Cadastro"
                      icon={<PersonAddAltIcon />}
                    />
                  </RequiredAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequiredAuth>
                    <List />
                  </RequiredAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequiredAuth>
                    <Single />
                  </RequiredAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequiredAuth>
                    <New
                      inputs={productInputs}
                      title="Cadastrar Produto"
                      icon={<AddBoxIcon />}
                    />
                  </RequiredAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
