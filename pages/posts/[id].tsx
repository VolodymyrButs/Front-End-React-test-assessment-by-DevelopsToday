import axios from 'axios'
import { useState } from 'react'
import Router from 'next/router'
import styled from 'styled-components'

import { Layout } from '../../components/Layout'
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
const PostBody = styled.p`
    min-height: calc(100vh - 280px);
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
const Post = ({ data }: any) => {
    const [status, setStatus] = useState('')
    const deletePost = () => {
        axios
            .delete('https://simple-blog-api.crew.red/posts/' + `${data.id}`)
            .then(
                () => (
                    setStatus('Deleted'),
                    setTimeout(() => Router.push('/'), 1000)
                )
            )
            .catch(() => setStatus('Try again!'))
    }
    console.log(data)
    return (
        <Layout>
            <PostTitleWraper>
                <PostTitle>{data.title}</PostTitle>
            </PostTitleWraper>
            <PostBody>{data.body}</PostBody>
            <DeleteButtonWraper>
                <ButtonStyled onClick={deletePost}>Delete Post</ButtonStyled>
                <DeleteNotifibation>{status}</DeleteNotifibation>
            </DeleteButtonWraper>
        </Layout>
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
