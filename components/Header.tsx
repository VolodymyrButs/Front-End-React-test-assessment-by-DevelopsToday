import React from 'react'
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
    background: #020024;
    background: linear-gradient(90deg, #020024 0%, #090975 50%, #020024 100%);
`
const LogoText = styled.p`
    color: white;
    text-align: center;
    font-size: 14px;
    padding: 5px;
`
const LinkStyled = styled.a<{ isActive: boolean }>`
    color: white;
    font-size: 15px;
    white-space: nowrap;
    text-decoration-line: none;
    padding: 5px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: ${props => (props.isActive ? '#999' : '')};
    :hover {
        background-color: #fff;
        color: darkblue;
    }
`

export const Header = () => {
    const router = useRouter()

    return (
        <HeaderWraper>
            <HeaderContainer>
                <Link href="/" passHref>
                    <LinkStyled isActive={router.pathname === '/'}>
                        Home
                    </LinkStyled>
                </Link>
                <LogoText>Poster - POSTS ABOUT PEOPLES</LogoText>
                <Link href="/create-post" passHref>
                    <LinkStyled isActive={router.pathname === '/create-post'}>
                        Create Post
                    </LinkStyled>
                </Link>
            </HeaderContainer>
        </HeaderWraper>
    )
}
