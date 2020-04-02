import axios from 'axios'
import Link from 'next/link'

const Page = ({ data }: any) => {
    console.log(data)
    return (
        <div>
            <Link href="/createPost">
                <a>Create Post</a>
            </Link>
            {data.map((post: { id: string; title: string }) => {
                return (
                    <div key={post.id}>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get('https://simple-blog-api.crew.red/posts')
    const data = await res.data
    return { props: { data } }
}
export default Page
