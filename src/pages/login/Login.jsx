import React, { useContext, useState } from "react";
import "./Login.scss";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Conectado!", {
          theme: "dark",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  };

  const { dispatch } = useContext(AuthContext);

  return (
    <div className="login loginBody">
      <div className="loginBox">
        <div className="row">
          <div className="col-lg-6 col-sm-6 imageBox">
            <img src="../dashboard.jpg" alt="pictur" className="imagemm" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <form className="loginForm">
              <h2 className="text-center text-dark">Dashboard</h2>
              <hr />
              <div className="form-group">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="******"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <button
                    className="btn btn-custom-submit"
                    onClick={handleLogin}
                  >
                    Entrar
                  </button>
                  {error &&
                    toast.error("Email ou senha incorretos!", {
                      theme: "dark",
                    })}
                </div>
              </div>
            </form>
          </div>
        </div>
        <span className="outshape"></span>
      </div>
    </div>
  );
};

export default Login;
