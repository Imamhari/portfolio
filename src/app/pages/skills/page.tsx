import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
    <section id="skills">
      <Image
                    src="/profile-light.png"
                    width={300}
                    height={30}
                    alt="profile picture"
                    priority
                    className="block dark:hidden"
                  />
    
    </section>
  )
}

export default Skills