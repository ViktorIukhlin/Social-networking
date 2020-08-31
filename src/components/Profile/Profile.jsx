import React from 'react';
import s from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts.jsx'

const Main = () => {
    return (
        <main className={s.main}>
            <div>
                <img className={s.picture} src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg" alt="gras" />

                <div className={s.container}>
                    <div className={s.boxPhoto}>
                        <img className={s.photo} src="https://sun9-6.userapi.com/c628318/v628318082/4822f/s8wqON4rtbs.jpg" alt="PhotoMy" />
                    </div>
                    <div className={s.blockAbout}>
                        <div className={s.name}>Batton B.</div>

                        <div className={s.info}>Date of Brith: 2 january</div>
                        <div className={s.info}>City: Saint-Petersburg</div>
                        <div className={s.info}>Education: BSU'11</div>
                        <div className={s.info}>Web Site: https://batton-batonovich.com</div>
                    </div>

                    <MyPosts/>
                </div>
            </div>
        </main>
    )
}

export default Main;