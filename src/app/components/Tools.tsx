import React from 'react'

const icons = [
  {icon : <img width="70" height="70" src="https://img.icons8.com/ios-filled/50/228BE6/visual-studio.png" alt="visual-studio"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/git.png" alt="git"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/ios-filled/50/command-line.png" alt="command-line"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/npm.png" alt="npm"/>},
  {icon : <img width="70" height="70" src="https://img.icons8.com/color/48/trello.png" alt="trello"/>},
]

function Tools() {
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

export default Tools