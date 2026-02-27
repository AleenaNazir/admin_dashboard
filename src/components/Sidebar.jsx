function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h4 className="mb-5">Admin Panel</h4>

      <div className="d-flex flex-column gap-3">
        <button
          className="btn btn-light text-start"
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className="btn btn-light text-start"
          onClick={() => setPage("products")}
        >
          Products
        </button>
      </div>
    </div>
  )
}

export default Sidebar