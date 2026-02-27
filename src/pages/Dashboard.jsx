import { getProducts } from "../utils/localStorage"

function Dashboard() {
  const products = getProducts()

  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Total Products</h5>
              <h3>{products.length}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard