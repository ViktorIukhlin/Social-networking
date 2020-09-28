import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Main = (props) => {
    return (
        <main className={s.main}>
            <div>
                <img className={s.picture} src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg" alt="gras" />

                <ProfileInfo />
                <MyPostsContainer store={props.store}/>
            </div>
        </main>
    )
}

export default Main;