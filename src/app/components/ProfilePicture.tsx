import React from 'react'
import Image from 'next/image'

function ProfilePicture() {
  return (
    <div>
      {/* gambar default */}
      <Image
        src="/profile-light.png"
        width={350}
        height={300}
        alt="profile picture"
        priority
        // className="block dark:hidden"
      />
      {/* <Image
        src="/profile-dark.png"
        width={300}
        height={300}
        alt="profile picture"
        priority
        className="hidden dark:block"
      /> */}
    </div>
  )
}

export default ProfilePicture


