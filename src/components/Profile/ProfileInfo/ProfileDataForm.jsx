import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import style from './ProfileInfo.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {true && <div><button>save</button></div>}
        {error && <div className={style.formSummaryError}>{error}</div>}
      <div className={style.name}>
        <b>Full name: </b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div className={style.info}>
        <b>looking for a job: </b> {createField("About me", "lookingForAJob", [], Input, {type: "checkbox"})}
      </div>
      <div className={style.info}>
        <b>My professional skills: </b> {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>
      <div className={style.info}>
        <b>About me: </b> {createField("About me:", "aboutMe", [], Textarea)} 
      </div>
      <div className={style.info}>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={style.contact}>
              <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
          )
        })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;