export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "user",
  //   headerName: "Foto",
  //   width: 90,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.img} alt="Foto" />
  //       </div>
  //     );
  //   },
  // },
  {
    field: "displayName",
    headerName: "Nome",
    width: 300,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },

  {
    field: "phone",
    headerName: "Telefone",
    width: 160,
  },
  {
    field: "cpf",
    headerName: "CPF",
    width: 160,
  },
];
export const productColumns = [
  { field: "productId", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Foto",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="Foto" />
        </div>
      );
    },
  },
  {
    field: "productName",
    headerName: "Nome",
    width: 230,
  },
  {
    field: "price",
    headerName: "Preço",
    width: 160,
  },

  {
    field: "desc",
    headerName: "Descrição",
    width: 250,
  },

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
