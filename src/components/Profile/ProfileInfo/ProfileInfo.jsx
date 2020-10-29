import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import ProfileDataForm from './ProfileDataForm'
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  let[editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then (
      () => {
        setEditMode(false);
      }
    )
  }

  return (
    <div className={style.container}>
      <div className={style.boxPhoto}>
        <img
          className={style.photo}
          src={
            props.profile.photos.large ||
            require('../../../assets/images/users.png')
          }
          alt="PhotoMy"
        />
      </div>
      <div className={style.blockAbout}>
        {props.isOwner && (
          <input type={'file'} onChange={onMainPhotoSelected} />
        )}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        { editMode 
        ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
        : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}
        />}
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div className={style.name}>
        <b>Full name: </b> {profile.fullName}
      </div>
      <div className={style.info}>
        <b>looking for a job: </b> {profile.lookingForAJob ? 'Yes' : 'No'}
      </div>
      {profile.lookingForAJob && (
        <div className={style.info}>
          <b>My professional skills: </b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div className={style.info}>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div className={style.info}>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          )
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  )
}

export default ProfileInfo
