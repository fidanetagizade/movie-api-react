import "./Filter.css";

function Filter() {
  return (
    <div className="filter-container">
      <input type="text" placeholder="Search" className="filter-input" />
      <button className="filter-btn">Search</button>
    </div>
  );
}
export default Filter;