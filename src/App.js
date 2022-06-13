import "./App.css";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={userInputs}
                    title="Realizar Cadastro"
                    icon={<PersonAddAltIcon />}
                  />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={productInputs}
                    title="Cadastrar Produto"
                    icon={<AddBoxIcon />}
                  />
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
