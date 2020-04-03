import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import styled from 'styled-components'

import { Layout } from '../components/Layout'
import { IPost } from '../features/posts/posts.types'
const HeadText = styled.h1`
    text-align: center;
`

const PostsWraper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const LinkStyled = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #000;
    text-align: center;
    text-decoration: none;
    min-width: 140px;
    border: 2px solid black;
    padding: 5px;
    border-radius: 5px;
    margin: 5px 0;
    width: 31%;
    > p {
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    :hover {
        background-color: #eee;
    }
`

interface IPageProps {
    posts: IPost[]
}
const Page: React.FC<IPageProps> = ({ posts }) => {
    return (
        <Layout>
            <HeadText>All Posts</HeadText>
            <PostsWraper>
                {posts.map(({ id, title }: IPost) => {
                    return (
                        <Link
                            key={id}
                            href="/posts/[id]"
                            as={`/posts/${id}`}
                            passHref
                        >
                            <LinkStyled>
                                <p>{title || 'no title'}</p>
                            </LinkStyled>
                        </Link>
                    )
                })}
            </PostsWraper>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts')
    const data = await res.data
    return { props: { posts: data } }
}
export default Page
