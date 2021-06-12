import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    // className: 'container',
})`
color:black;


`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg',
})`
    margin-bottom: 20 px;
    color:black;
    
`
const Title1 = styled.h1.attrs({
    className: 'h1',
})`

margin-left: 550px;
font-family: Cursive;
color:#0080ff;

`
const Title2 = styled.h1.attrs({
    className: 'h1',
})`

margin-left: 580px;
font-family: Cursive;


`
class NavBar extends Component {
    render() {
        return (
            <Container>
                <br></br>
                <Title1>Good Food  </Title1>
                <Title2>  ~ To ~  </Title2>
               
                <Title1> Good Mood </Title1>
                <Nav>
                   
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar