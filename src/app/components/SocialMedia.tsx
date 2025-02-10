import { Github, Instagram, Linkedin,  } from 'lucide-react';

export default function SocialMedia() {
  return (
    <div className="flex gap-7 mt-4">
      <a href="https://www.linkedin.com/in/imamharimaulana/" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#0A66C2] text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_0_20px_rgb(10,102,194)]">
        <Linkedin size={30} />
      </a>
      <a href="https://github.com/Imamhari" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#3f4346] text-[#3f4346] transition-all hover:bg-[#3f4346] hover:text-white hover:shadow-[0_0_20px_rgb(63,67,70)]">
        <Github size={30} />
      </a>
      <a href="https://www.instagram.com/imamhm.4/" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#BC2A8D] text-[#BC2A8D] transition-all hover:bg-[#BC2A8D] hover:text-white hover:shadow-[0_0_20px_rgb(188,42,141)]">
        <Instagram size={30} />
      </a>
      
    </div>
  )
}
