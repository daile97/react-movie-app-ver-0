import { InfoOutlined, PlayCircle } from "@mui/icons-material"

interface Props {
  title: string
  overview: string
  video?: boolean
}

export const Overview = ({ title, overview, video }: Props) => {
  return (
    <div className="px-4 md:px-8 absolute bottom-[30%] max-w-[70%] left-0 text-white">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{overview}</p>
      <div className="flex mt-3">
        <button className="hero-button">
          <PlayCircle />
          <span>Play Trailer</span>
        </button>
        <button className="hero-button ml-2">
          <InfoOutlined />
          <span>More Info</span>
        </button>
      </div>
    </div>
  )
}
