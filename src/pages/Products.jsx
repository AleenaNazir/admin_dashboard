import { useEffect, useState } from "react"
import { getProducts, saveProducts } from "../utils/localStorage"

function Products({ setPage, setEditProduct }) {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    setProducts(getProducts())
  }, [])

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id)
    setProducts(updated)
    saveProducts(updated)
  }

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h2>Products</h2>
        <button
          className="btn-lavender"
          onClick={() => {
            setEditProduct(null)
            setPage("addProduct")
          }}
        >
          Add Product
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filtered.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5>{product.name}</h5>
                <p className="text-muted">${product.price}</p>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      setEditProduct(product)
                      setPage("addProduct")
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products