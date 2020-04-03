import React, { useState } from 'react'
import axios from 'axios'
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
    const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPostTitle(e.currentTarget.value)
    }
    const handleBodyChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setPostBody(e.currentTarget.value)
    }
    const sendPost = (e: React.FormEvent<HTMLFormElement>) => {
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
            .then(response => Router.push('/posts/' + `${response.data.id}`))
            .catch(() => setStatus('Try again!'))
    }
    return (
        <Layout>
            <HeadText>Here you can create your own post</HeadText>
            <InstructionTest>
                To create a `&#39;`New Post`&#39;` enter the TITLE (max 100
                symbols) and the TEXT in the appropriate fields and click on
                <b>`&#39;`create post`&#39;`</b> , then you will be redirected
                to the new post page.
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
