import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import { useEffect,useState } from 'react';

const Order = () => {
     const [orders, setOrders] = useState([])
     useEffect(()=>{
          const fetchData = async ()=>{
               let fetchedProducts = await axios(process.env.NEXT_PUBLIC_HOST+"/order")  
               console.log(fetchedProducts)
               setOrders(fetchedProducts.data)
          }
          fetchData()
     },[])
     const columns = [
          { field: 'id', headerName: 'ID' },
          { field: 'productid', headerName: 'Product id', width: 100 },
          { field: 'buyername', headerName: 'Buyer name', width: 150 },
          { field: 'phonenumber', headerName: 'Phone', width: 100 },
          { field: 'email', headerName: 'Email', width: 250 },
          { field: 'buyeradress', headerName: 'Address', width: 250 },
          { field: 'actions', headerName: 'Actions', width: 150 ,renderCell: (params) => {
               return (
                 <button
                   onClick={(e) => {
                         e.preventDefault();
                         console.log(params);
                   }}
                   variant="contained"
                   className="delete-btn"
                 >
                   Delete
                 </button>
               );
          } },
        ]
     return (  
          <div className="order-container">
               <p className="title">Order management</p>
               <DataGrid
                    rows={orders}
                    columns={columns}
                    initialState={{
                    pagination: {
                         paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
               />
          </div>
     );
}
export default Order;