import React from "react";

const icons = [
  {icon : <img src="/assets/icons/icons8-visual-studio.svg" alt='visual-studio'/>},
  {icon : <img src="/assets/icons/icons8-github.svg" alt='github'/>},
  {icon : <img src="/assets/icons/icons8-git.svg" alt='git'/>},
  {icon : <img src="/assets/icons/icons8-command-line-50.png" alt='command-line'/>},
  {icon : <img src="/assets/icons/icons8-npm.svg" alt='npm'/>},
  {icon : <img src="/assets/icons/icons8-trello.svg" alt='trello'/>},
  {icon : <img src="/assets/icons/icons8-postman-inc-70.png" alt='postman'/>},
  {icon : <img src="/assets/icons/icons8-figma.svg" alt='figma'/>},
  
];

function Tools() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 xl:mx-5">
      {icons.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-[100px] h-[100px] bg-slate-200 dark:bg-blue-950 rounded-lg shadow-lg text-white max-w-[100px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer m-2"
        >
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
  );
}

export default Tools;
