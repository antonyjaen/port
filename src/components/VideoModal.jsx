import React from 'react'
import styles from './videoModal.module.css'

export const VideoModal = ({url,setOpen}) => {
  //"./IonicApp.mp4"
  return (
      <div className={styles['video-container']} >
        <h5 onClick={()=>{ setOpen(false) }}>X</h5>
        <video  muted controls>
        <source src={url} type="video/mp4" />
      </video>
      </div>
  )
}
