import Order from "../Order/Order";
import Product from "../Product/Product";
import {useState} from "react"

const AdminPage = () => {
     const [page,setPage] = useState("product");
     return (
          <div className="admin-page">
               <div className="side-bar">
                    <p onClick={(e)=>{
                         e.preventDefault();
                         setPage("product");
                    }}>Manage products</p>
                    <p onClick={(e)=>{
                         e.preventDefault();
                         setPage("order");
                    }}>Manage orders</p>
               </div>
               <div className="main-container">
                    {
                         page === "product" ? 
                              <Product/>
                         :
                              <Order/>
                    }
               </div>
          </div>
     );
}

export default AdminPage;