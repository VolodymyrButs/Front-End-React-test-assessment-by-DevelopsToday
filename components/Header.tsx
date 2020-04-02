import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeaderContainer = styled.div`
    max-width: 1000px;
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderWraper = styled.div`
    background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 117, 1) 50%,
        rgba(2, 0, 36, 1) 100%
    );
`
const LogoText = styled.p`
    color: white;
    text-align: center;
    font-size: 14px;
    padding: 5px;
`

export const Header = () => {
    const router = useRouter()
    let styleHome = ''
    let styleCreate = ''
    if (router.pathname === '/') {
        styleHome = 'background-color: #aaa;'
        styleCreate = ''
    } else if (router.pathname === '/createPost') {
        styleHome = ''
        styleCreate = 'background-color: #aaa;'
    } else {
        styleHome = ''
        styleCreate = ''
    }
    const LinkStyledHome = styled.a`
        color: white;
        font-size: 15px;
        white-space: nowrap;
        text-decoration-line: none;
        padding: 5px;
        border: 2px solid white;
        border-radius: 5px;
        ${styleHome} :hover {
            background-color: #fff;
            color: darkblue;
        }
    `
    const LinkStyledCreate = styled.a`
        color: white;
        font-size: 15px;
        white-space: nowrap;
        text-decoration-line: none;
        padding: 5px;
        border: 2px solid white;
        border-radius: 5px;
        ${styleCreate} :hover {
            background-color: #fff;
            color: darkblue;
        }
    `
    return (
        <HeaderWraper>
            <HeaderContainer>
                <Link href="/" passHref>
                    <LinkStyledHome>Home</LinkStyledHome>
                </Link>
                <LogoText>Poster - POSTS ABOUT PEOPLES</LogoText>
                <Link href="/createPost" passHref>
                    <LinkStyledCreate>Create Post</LinkStyledCreate>
                </Link>
            </HeaderContainer>
        </HeaderWraper>
    )
}
