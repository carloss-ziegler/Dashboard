import React, { useEffect, useState } from "react";
import "./Single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";

const Single = () => {
  const { userId } = useParams();
  const docRef = doc(db, "clientes", userId);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = () => {
      getDoc(docRef).then((doc) => {
        setUser(doc.data());
      });
    };
    return getUser();
  }, []);

  console.log(user);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton">Editar</button>
            <h1 className="title">Informações</h1>
            <hr />
            <div className="item">
              <img src="/pngimg.png" alt="Avatar" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{user.displayName}</h1>
                <div className="detailItem">
                  {/* <span className="itemKey">Email:</span> */}
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  {/* <span className="itemKey">Telefone:</span> */}
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  {/* <span className="itemKey">CPF:</span> */}
                  <span className="itemValue">{user.cpf}</span>
                </div>
                <div className="detailItem">
                  {/* <span className="itemKey">Observações:</span> */}
                  <span className="itemValue">{user.obs}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Gastos" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Últimas Atividades</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
