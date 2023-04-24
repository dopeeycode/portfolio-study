interface Props{
  titleSection: string,
  number: string
}


export default function SectionTitle ({ titleSection, number }: Props) {
  return (
    <div className="flex items-center">
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        <span className="text-base md:text-lg text-textGreen mr-2">
          {number}.
          </span>
        {titleSection}
      </h2>
      <div className="w-72 hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"/>
    </div>
  )
}
