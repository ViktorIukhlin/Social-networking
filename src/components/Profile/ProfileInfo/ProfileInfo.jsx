import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.container}>
            <div className={s.boxPhoto}>
                <img className={s.photo} src={props.profile.photos.large} alt="PhotoMy" />
            </div>
            <div className={s.blockAbout}>
                <div className={s.name}>Batton B.</div>

                <div className={s.info}>Date of Brith: 2 january</div>
                <div className={s.info}>City: Saint-Petersburg</div>
                <div className={s.info}>Education: BSU'11</div>
                <div className={s.info}>Web Site: https://batton-batonovich.com</div>
            </div>
        </div>

    )
}

export default ProfileInfo;