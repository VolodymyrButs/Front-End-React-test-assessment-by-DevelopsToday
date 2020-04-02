import styled from 'styled-components'

const FooterContainer = styled.div`
    max-width: 1000px;
    padding: 0 10px;
    box-sizing: border-box;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const FooterWraper = styled.div`
    background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 117, 1) 50%,
        rgba(2, 0, 36, 1) 100%
    );
`
const Copiright = styled.a`
    color: white;
    font-size: 20px;
    text-decoration: none;
`

export const Footer = () => {
    return (
        <FooterWraper>
            <FooterContainer>
                <Copiright
                    href="https://drive.google.com/open?id=15LRT2JIgc1aR1o0drZWChSWyVz6pl4uH"
                    target="blank"
                >
                    Buts Developers
                </Copiright>
            </FooterContainer>
        </FooterWraper>
    )
}
