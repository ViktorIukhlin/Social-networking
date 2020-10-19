import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.container}>
            <div className={style.boxPhoto}>
                <img className={style.photo} src={props.profile.photos.large} alt="PhotoMy" />
            </div>
            <div className={style.blockAbout}>
                <div className={style.name}>Batton B.</div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className={style.info}>Date of Brith: 2 january</div>
                <div className={style.info}>City: Saint-Petersburg</div>
                <div className={style.info}>Education: BSU'11</div>
                <div className={style.info}>Web Site: https://batton-batonovich.com</div>
            </div>
        </div>

    )
}

export default ProfileInfo;