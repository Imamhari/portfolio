import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Skills() {
  return (
    <section 
    id ="skills"
    className='className="flex p-0 md:p-[70px] pt-[50px] md:mx-[7vh] text-black dark:text-white flex-col space-y-5 relative mx-2'
    >
    <h1
        className={`${sourceCodePro.className} w-full text-start text-[50px] font-bold leading-tight items-center `}
      >
        Skills
      </h1>
    </section>
  )
}

export default Skills