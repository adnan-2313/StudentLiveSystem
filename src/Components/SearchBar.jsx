import "./SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';
const SearchBar = (porps) => {
  return (
    <>
      <section>
        <div className="search">
        <label className="label1" htmlFor={porps.holder}></label>
            <input type="text" />
        </div>
      </section>
    </>
  )
}

export default SearchBar
