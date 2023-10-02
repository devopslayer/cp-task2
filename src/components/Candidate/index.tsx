import { PlayCircle, Book } from "lucide-react"

interface ICandidate {
  id: number
  fullName: string
  country: string
  degree: string
  tags: string[]
  pill: string[]
  completed?: number
  programs?: number
}

export const Candidate = ({ fullName, country, degree, tags, pill, completed, programs }: ICandidate) => {
  const fullname = fullName.split("")
  const fName = fullname[0]
  // const lName = fullname[1]

  // console.log("Fullname: ", fullname, "FName: ", fName, "LName: ", lName)

  return (
    <div className="flex items-center gap-x-[0.8rem] bg-white font-poppins relative">
      <div>
        <input type="checkbox" />
      </div>
      <div className="p-[1.6rem] flex items-center gap-x-[2.4rem]">
        <div className="h-[5.6rem] w-[5.6rem] rounded-[10rem] flex items-center justify-center bg-[#EDF4FF]">
          <h3 className="text-[#D0E1FF] text-[2rem] font-semibold">{fName}</h3>
        </div>
        <div className="space-y-[0.8rem]">
          <h3 className="font-semibold text-[1.4rem]">{fullName}</h3>
          <p className="text-[1rem] font-medium">{country}</p>
          <p className="text-[1rem] font-light">{degree}</p>
          <div className="space-y-[0.8rem]">
            <div className="flex items-center gap-x-[1rem]">
              {tags.map((title, index) => {
                return <Tags title={title} key={index} />
              })}
            </div>

            <div className="flex items-center gap-x-[1rem]">
              {pill.map((title, index) => {
                return <Pill title={title} key={index} />
              })}
            </div>
          </div>
        </div>
      </div>


      <div className="absolute top-[2rem] right-[3.2rem] flex items-center gap-x-[1rem]">
        {programs === undefined ? null : (
          <div className="w-[4.1rem] h-[2.3rem] rounded-[1.6rem] flex items-center justify-center gap-x-[0.4rem] bg-[#F7F8FD] text-[#305DC6]">
            <PlayCircle className="w-[1.4rem] h-[1.4rem]" />
            <span>
              {programs}
            </span>
          </div>
        )}
        {completed === undefined ? null : (
          <div className="rounded-[1.6rem] h-[2.3rem] gap-x-[0.8rem] flex items-center justify-center bg-[#F7F8FD] w-[11.2rem] text-[#305DC6]">
            <Book className="w-[1.4rem] h-[1.4rem]" />
            <span>{completed} programs</span>
          </div>
        )}
      </div>
    </div>
  )
}

const Tags = ({ title }: { title: string }) => {
  return (
    <p className="text-[0.8rem] text-[#1D4ED8] font-normal">#{title}</p>
  )
}

const Pill = ({ title }: { title: string }) => {
  return (
    <p className="rounded-[1.6rem] w-fit bg-[#F3FAFC] text-[#037092] py-[0.2rem] px-[1rem] flex items-center justify-center">{title}</p>
  )
}
