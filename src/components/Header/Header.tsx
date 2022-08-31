import { MovieFilter } from "@mui/icons-material"
import { SearchBox } from "./SearchBox"

export const Header = () => {
  return (
    <header className="text-white px-8 z-50 py-4 flex items-center sticky bg-none top-0 justify-between">
      <div className="flex items-center">
        <MovieFilter />
        <h1>DaiMDB</h1>
      </div>
      <SearchBox />
    </header>
  )
}
