import React from 'react'

const icons = [
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/nextjs.png" alt="nextjs"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>},
]

function Skill() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 xl:mx-5">
      {icons.map((item,index) => (
        <div key={index} className="flex items-center justify-center w-[100px] h-[100px] bg-[#3f4346] rounded-lg shadow-md text-white max-w-[100px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer m-2">
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
  )
}

export default Skill