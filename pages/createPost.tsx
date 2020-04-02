import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/router'

const CreatePost = () => {
    const [postTitle, setPostTitle] = useState()
    const [postBody, setPostBody] = useState()
    const [isSended, setIsSended] = useState('')
    const handleTitleChange = (e: any) => {
        setPostTitle(e.target.value)
    }
    const handleBodyChange = (e: any) => {
        setPostBody(e.target.value)
    }
    const sendPost = (e: any) => {
        e.preventDefault()
        axios
            .post(
                'https://simple-blog-api.crew.red/posts',
                { title: `${postTitle}`, body: `${postBody}` },
                {
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            )
            .then(
                () => (
                    setIsSended('SENDED'),
                    setTimeout(() => Router.push('/'), 1000)
                )
            )
    }
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <form onSubmit={sendPost}>
                <input type="text" name="title" onChange={handleTitleChange} />
                <textarea name="body" onChange={handleBodyChange} />
                <button type="submit">Send post</button>
            </form>
            <p>{isSended}</p>
        </div>
    )
}

export default CreatePost
