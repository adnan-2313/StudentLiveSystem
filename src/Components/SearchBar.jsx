import "./SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';
const SearchBar = (porps) => {
  return (
    <>
      <section>
        <div className="search">
            <input type="text" placeholder={`search ${porps.holder}`} />
        </div>
      </section>
    </>
  )
}

export default SearchBar
