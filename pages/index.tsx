import axios from 'axios'
import Link from 'next/link'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

const HeadText = styled.h1`
    text-align: center;
`

const PostsWraper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const PostMiniature = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    width: 31%;
    min-width: 140px;
    border: 2px solid black;
`

const LinkStyled = styled.a`
    font-size: 15px;
    color: #000;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    border: 2px solid white;
    padding: 20px 5px;
    border-radius: 5px;
    width: 100%;
    :hover {
        background-color: #eee;
    }
`
const Page = ({ data }: any) => {
    return (
        <Layout>
            <HeadText>All Posts</HeadText>
            <PostsWraper>
                {data.map((post: { id: string; title: string }) => {
                    return (
                        <PostMiniature key={post.id}>
                            <Link
                                href="/posts/[id]"
                                as={`/posts/${post.id}`}
                                passHref
                            >
                                <LinkStyled>
                                    {post.title || 'no title'}
                                </LinkStyled>
                            </Link>
                        </PostMiniature>
                    )
                })}
            </PostsWraper>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts')
    const data = await res.data
    return { props: { data } }
}
export default Page
