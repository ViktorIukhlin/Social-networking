import React from 'react';
import s from './Main.module.css';

const Main = () => {
    return (
        <main className={s.main}>
            <div>
                <img className={s.picture} src="https://image.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg" alt="gras" />

                <div className={s.container}>
                    <img className={s.photo} src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="PhotoMy" />
                    <div className={s.blockAbout}>
                        <div className={s.name}>Batton B.</div>

                        <div className={s.info}>Date of Brith: 2 january</div>
                        <div className={s.info}>City: Saint-Petersburg</div>
                        <div className={s.info}>Education: BSU'11</div>
                        <div className={s.info}>Web Site: https://batton-batonovich.com</div>
                    </div>

                    <div className={s.post}>
                        My posts
                    </div>
                    <div className={s.post}>
                        My posts
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;