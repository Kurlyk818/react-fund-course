import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/myButton'
const PostForm = ({ create }) => {
  const [objPost, setObjPost] = useState({ title: '', body: '' })
  const addNewPost = e => {
    e.preventDefault()
    const newObjPost = { ...objPost, id: Date.now() }
    create(newObjPost)
    setObjPost({ title: '', body: '' })
  }
  return (
    <form>
      <MyInput
        value={objPost.title}
        onChange={e => setObjPost({ ...objPost, title: e.target.value })}
        type='text'
        placeholder='Name of post'
      ></MyInput>

      <MyInput
        value={objPost.body}
        onChange={e => setObjPost({ ...objPost, body: e.target.value })}
        type='text'
        placeholder='Description of post'
      ></MyInput>
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  )
}

export default PostForm
