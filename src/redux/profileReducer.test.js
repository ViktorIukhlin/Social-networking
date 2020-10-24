import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import React from 'react'

let state = {
  posts: [
    { id: 1, message: 'How are you?', likesCount: 11 },
    { id: 2, message: 'mmmm?', likesCount: 2 },
    { id: 3, message: 'Are you ok?', likesCount: 4 }
  ] 
}

it('length of posts should be incremented', () => {
  //1. test data
  let action = addPostActionCreator("Hello world")
  //2. action
  let newState = profileReducer (state, action)
  //3. expectation
  expect(newState.posts.length).toBe(4)
});

it('length of posts should be correct', () => {
  //1. test data
  let action = addPostActionCreator("Hello world")
  //2. action
  let newState = profileReducer (state, action)
  //3. expectation
  expect(newState.posts[3].message).toBe("Hello world")
});

it('after delete length should be decrement', () => {
  //1. test data
  let action = deletePost(1)
  //2. action
  let newState = profileReducer (state, action)
  //3. expectation
  expect(newState.posts.length).toBe(2)
});

it('after delete length should be not decrement if id incorrect', () => {
  //1. test data
  let action = deletePost(1000)
  //2. action
  let newState = profileReducer (state, action)
  //3. expectation
  expect(newState.posts.length).toBe(3)
});