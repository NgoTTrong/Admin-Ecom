import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InsertForm from "../InsertForm/InsertForm";

const Product = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [enableForm, setEnableForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      let fetchedProducts = await axios.get(
        process.env.NEXT_PUBLIC_HOST + "/product"
      );
      console.log(fetchedProducts);
      setProducts(fetchedProducts.data);
    };
    fetchData();
  }, []);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "thumbnailurl",
      headerName: "Thumbnail",
      width: 150,
      renderCell: (params) => <img src={params.value} alt="product" />,
    },
    { field: "description", headerName: "Description", width: 300 },
    { field: "baseprice", headerName: "Base price", width: 150 },
    { field: "discountprice", headerName: "Discount price", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <button
            onClick={async (e) => {
              e.preventDefault();
              await axios.post(
                process.env.NEXT_PUBLIC_HOST + "/product/delete",
                { productId: params.id }
              );
              router.reload(window.location.pathname);
            }}
            variant="contained"
            className="delete-btn"
          >
            Delete
          </button>
        );
      },
    },
  ];
  return (
    <div className="product-container">
      <p className="title">Product management</p>
      <button
        className="insert-btn"
        onClick={(e) => {
          e.preventDefault();
          setEnableForm(true);
        }}
      >
        Insert a product
      </button>
      {enableForm && <InsertForm setEnableForm={setEnableForm} />}
      <DataGrid
        className="product-table"
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 3 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowHeight={() => 100}
      />
    </div>
  );
};
export default Product;
