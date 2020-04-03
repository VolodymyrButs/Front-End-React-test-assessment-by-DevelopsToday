import React from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import { Footer } from './Footer'

interface ILayourProps {
    children: JSX.Element[]
}

const LayoutWraper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1 0 auto;
`
const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`

export const Layout: React.FC<ILayourProps> = ({ children }) => {
    return (
        <LayoutWraper>
            <Header />
            <Content>
                <Container>{children}</Container>
            </Content>
            <Footer />
        </LayoutWraper>
    )
}
