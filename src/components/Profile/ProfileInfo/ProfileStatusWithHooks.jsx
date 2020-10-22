import React from 'react';
import { useState } from 'react';
import style from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div>
      {!editMode 
      ?
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
        </div>
      :
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } value={status}/>
        </div>
      } 
    </div>
  )

}

export default ProfileStatusWithHooks;