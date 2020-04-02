import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import Router from 'next/router'

const Post = ({ data }: any) => {
    const [isDeleted, setIsDeleted] = useState('')
    const deletePost = () => {
        axios
            .delete('https://simple-blog-api.crew.red/posts/' + `${data.id}`)
            .then(
                () => (
                    setIsDeleted('DELETED'),
                    setTimeout(() => Router.push('/'), 1000)
                )
            )
    }

    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <p>Post: {data.title}</p>

            <p>{data.body}</p>
            <button onClick={deletePost}>Delete</button>
            <p>{isDeleted}</p>
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const res = await axios.get(
        'https://simple-blog-api.crew.red/posts/' + `${context.params.id}`
    )
    const data = await res.data
    return { props: { data } }
}
export default Post
