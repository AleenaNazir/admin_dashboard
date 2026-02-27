import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Products from "./pages/Products"
import AddEditProduct from "./pages/AddEditProduct"
import "./App.css"

function App() {
  const [page, setPage] = useState("dashboard")
  const [editProduct, setEditProduct] = useState(null)

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="content">
        {page === "dashboard" && <Dashboard />}
        {page === "products" && (
          <Products setPage={setPage} setEditProduct={setEditProduct} />
        )}
        {page === "addProduct" && (
          <AddEditProduct
            setPage={setPage}
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
        )}
      </div>
    </div>
  )
}

export default App