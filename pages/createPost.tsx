import axios from 'axios'
import { useState } from 'react'
import Router from 'next/router'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

const HeadText = styled.h1`
    text-align: center;
`
const InstructionTest = styled.p`
    margin: 0 auto;
    text-align: justify;
    width: 70%;
    min-width: 290px;
    > b {
        white-space: nowrap;
    }
`
const FormStyled = styled.form`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 70%;
    min-width: 290px;
`
const InputStyled = styled.input`
    width: 100%;
    font-size: 15px;
    padding: 3px;
    margin: 10px 0;
    box-sizing: border-box;
`
const TextAreaStyled = styled.textarea`
    font-size: 12px;
    padding: 3px;
    min-width: 100%;
    max-width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
`
const ButtonStyled = styled.button`
    color: white;
    font-size: 15px;
    align-self: flex-end;
    width: 100px;
    background-color: grey;
    border: 2px solid grey;
    border-radius: 4px;
    :hover {
        color: blue;
        background-color: #fff;
    }
`
const SendNotification = styled.p`
    align-self: flex-end;
    font-size: 15px;
    text-align: center;
    margin: 3px 10px;
    color: blue;
    width: 100px;
`
const CreatePost = () => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [status, setStatus] = useState('')
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
                    setStatus('Created'),
                    setTimeout(() => Router.push('/'), 1000)
                )
            )
            .catch(() => setStatus('Try again!'))
    }
    return (
        <Layout>
            <HeadText>Here you can create your own post</HeadText>
            <InstructionTest>
                To create a "New Post" enter the TITLE (max 100 symbols) and the
                TEXT in the appropriate fields and click on <b>'create post'</b>
                ' , then you will be redirected to the homepage.
            </InstructionTest>
            <FormStyled onSubmit={sendPost}>
                <InputStyled
                    type="text"
                    name="title"
                    maxLength={100}
                    onChange={handleTitleChange}
                    placeholder="Input title here"
                    required
                />
                <TextAreaStyled
                    name="body"
                    onChange={handleBodyChange}
                    placeholder="Input text here"
                    rows={7}
                    required
                />
                <ButtonStyled type="submit">Create post</ButtonStyled>
                <SendNotification>{status}</SendNotification>
            </FormStyled>
        </Layout>
    )
}

export default CreatePost
