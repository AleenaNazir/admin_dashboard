import { useState, useEffect } from "react"
import { getProducts, saveProducts } from "../utils/localStorage"

function AddEditProduct({ setPage, editProduct, setEditProduct }) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    if (editProduct) {
      setName(editProduct.name)
      setPrice(editProduct.price)
    }
  }, [editProduct])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !price) {
      alert("Please fill all fields")
      return
    }

    const products = getProducts()

    if (editProduct) {
      const updated = products.map((p) =>
        p.id === editProduct.id ? { ...p, name, price } : p
      )
      saveProducts(updated)
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price
      }
      saveProducts([...products, newProduct])
    }

    setEditProduct(null)
    setPage("products")
  }

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card-modern p-5"
        style={{ width: "500px", background: "white" }}
      >
        <h3 className="mb-4 text-center">
          {editProduct ? "Edit Product" : "Add Product"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Product Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">
              Price
            </label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="btn-lavender w-100">
           {editProduct ? "Update Product" : "Add Product"}
         </button>
        </form>
      </div>
    </div>
  )
}

export default AddEditProduct