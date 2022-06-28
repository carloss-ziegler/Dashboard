import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "./Datatable.scss";
import { userColumns } from "../../DataTableSource";
import { Link, useParams } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import CachedIcon from "@mui/icons-material/Cached";
import { toast } from "react-toastify";

const Datatable = ({ table, title, columns, page }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, table));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Deseja realmente excluir o cadastro?")) {
        await deleteDoc(doc(db, table, id));

        toast.info("Deletado com sucesso!", {
          theme: "dark",
        });
      }
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Ação",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <button className="viewButton">Ver</button>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Deletar
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Link to={`/${page}/new`} className="link shadow">
          {title}
        </Link>
        <button
          className="btn btn-info shadow-sm"
          title="Recarregar tabela"
          onClick={() => window.location.reload()}
        >
          <CachedIcon />
        </button>
      </div>
      <DataGrid
        className="shadow border border-dark"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
