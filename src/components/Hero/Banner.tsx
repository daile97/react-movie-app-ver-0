interface Props {
  url: string
}

export const Banner = ({ url }: Props) => {
  return (
    <img
      src={url}
      className='object-cover h-[100%] w-[100%] absolute -top-[64px]'
    />
  )
}
