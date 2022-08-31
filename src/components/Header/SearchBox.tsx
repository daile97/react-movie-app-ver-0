import SearchIcon from '@mui/icons-material/Search'

export const SearchBox = () => {
  return (
    <div className='text-black rounded-lg flex items-center px-3 py-1 bg-white'>
      <input
        type="text"
        placeholder="Search movies..."
        className='outline-none border-none'
      />
      <SearchIcon />
    </div>
  )
}
