import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Main = () => {
    return (
        <main className={s.main}>
            <div>
                <img className={s.picture} src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg" alt="gras" />

                <ProfileInfo />
                <MyPosts/>
            </div>
        </main>
    )
}

export default Main;