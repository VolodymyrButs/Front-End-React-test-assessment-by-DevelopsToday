import React, { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'

import { Layout } from '../../components/Layout'
import { IPost } from '../../features/posts/posts.types'

const PostTitleWraper = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
`
const PostTitle = styled.h1`
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    ::after {
        position: absolute;
        content: '';
        height: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background: green;
    }
`
const DeleteButtonWraper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`

const ButtonStyled = styled.button`
    color: white;
    width: 100px;
    background-color: grey;
    border: 2px solid grey;
    border-radius: 4px;
    :hover {
        color: red;
        background-color: #fff;
    }
`
const DeleteNotifibation = styled.p`
    width: 100px;
    margin-top: 3px;
    text-align: center;
    color: red;
    margin: 0;
`
interface IPostPageProps {
    post: IPost
}
const PostPage: React.FC<IPostPageProps> = ({ post }) => {
    const [status, setStatus] = useState('')
    const deletePost = () => {
        axios
            .delete('https://simple-blog-api.crew.red/posts/' + `${post.id}`)
            .then(() => Router.push('/'))
            .catch(() => setStatus('Try again!'))
    }
    return (
        <Layout>
            <PostTitleWraper>
                <PostTitle>{post.title}</PostTitle>
            </PostTitleWraper>
            <p>{post.body}</p>
            <DeleteButtonWraper>
                <ButtonStyled onClick={deletePost}>Delete Post</ButtonStyled>
                <DeleteNotifibation>{status}</DeleteNotifibation>
            </DeleteButtonWraper>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const res = await axios.get(
        'https://simple-blog-api.crew.red/posts/' + `${context?.params?.id}`
    )
    const data = await res.data
    return { props: { post: data } }
}
export default PostPage
