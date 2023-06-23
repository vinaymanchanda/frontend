import React, { useState } from 'react'
import Header from '../component/Layout/Header'
import styles from '../styles/styles'
import ProfileSideBar from "../component/Profile/ProfileSideBar.jsx"
import ProfileContent from "../component/Profile/ProfileContent.jsx"

const ProfilePage = () => {
  const [active,setActive]= useState(1);
  return (
    <div>
        <Header/>
        <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className='w-[335px]'>
                <ProfileSideBar active={active} setActive={setActive}/>

            </div>
            <ProfileContent active={active} />
        </div>
    </div>
  )
}

export default ProfilePage