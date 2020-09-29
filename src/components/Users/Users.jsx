import React from 'react'
import styles from './styles.module.css'

let Users = (props) => {
  
  if(props.users.length === 0){
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png',
        followed: true,
        fullName: 'Valera',
        status: 'I am a person',
        location: { city: 'Saint-Petersburg', country: 'Russia' },
      },
      {
        id: 2,
        photoUrl:
          'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png',
        followed: true,
        fullName: 'Senya',
        status: 'I am a people',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl:
          'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png',
        followed: false,
        fullName: 'Sasha',
        status: 'Tired',
        location: { city: 'Dereven', country: 'Russia' },
      },
      {
        id: 4,
        photoUrl:
          'https://files.123freevectors.com/wp-content/uploads/new/objects/392-free-camera-iris-vector-art.png',
        followed: false,
        fullName: 'Lena',
        status: 'Happy',
        location: { city: 'Kolbaskino', country: 'Russia' },
      },
    ])
  }

  return (
    <div>
      {props.users.map((item) => (
        <div key={item.id}>
          <span>
            <div>
              <img
                src={item.photoUrl}
                alt="photosos"
                className={styles.userPhoto}
              />
            </div>
            <div>
              {item.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(item.id)
                  }}
                >
                  {' '}
                  Unfollow{' '}
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(item.id)
                  }}
                >
                  {' '}
                  Follow{' '}
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{item.fullName}</div>
            <div>{item.status}</div>
          </span>
          <span>
            <div>{item.location.country}</div>
            <div>{item.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
