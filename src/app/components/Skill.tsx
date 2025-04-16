import React from 'react'

const icons = [
  {icon : <img src="/assets/icons/icons8-html-5.svg" alt='html-5'/>},
  {icon : <img src="/assets/icons/icons8-css3.svg" alt='css-3'/>},
  {icon : <img src="/assets/icons/icons8-javascript.svg" alt='javascript'/>},
  {icon : <img src="/assets/icons/icons8-typescript.svg" alt='typescript'/>},
  {icon : <img src="/assets/icons/icons8-react.svg" alt='react'/>},
  {icon : <img src="/assets/icons/icons8-nextjs.svg" alt='nextjs'/>},
  {icon : <img src="/assets/icons/icons8-bootstrap.svg" alt='bootstrap'/>},
  {icon : <img src="/assets/icons/icons8-tailwindcss.svg" alt='tailwind-css'/>},
]

function Skill() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 xl:mx-5">
      {icons.map((item,index) => (
        <div key={index} className="flex items-center justify-center rounded-lg bg-slate-200 dark:bg-blue-950 shadow-md text-white w-[100px] h-[100px] max-w-[100px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer m-2">
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
  )
}

export default Skill