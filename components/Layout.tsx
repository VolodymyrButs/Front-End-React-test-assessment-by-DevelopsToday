import styled from 'styled-components'

import { Header } from './Header'
import { Footer } from './Footer'

interface ILayourProps {
    children: any
}

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    align-self: center;
    flex: 1 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
`

const LayoutWraper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`

export const Layout: React.FC<ILayourProps> = ({ children }) => {
    return (
        <LayoutWraper>
            <Header />
            <Container>{children}</Container>
            <Footer />
        </LayoutWraper>
    )
}
