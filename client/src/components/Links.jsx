import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
   
})`

`

const List = styled.div.attrs({
    className: 'navbar ',
   
})`
width:850px;
background-color:#ecc6ec;
float:center;
color:white;
margin-left:230px;
border-style: outset;
`

const Item = styled.div.attrs({
    className: 'navbar ',
})``

const Title = styled.h3.attrs({
    
})`
color : black;

`

class Links extends Component {
    render() {
        return (
          
            <React.Fragment>
  
                <Title>
                <Link to="/" className="">
                    
                </Link>
                <Collapse>
                    <List >
                        <Item>
                            <Link to="/foods/list" >
                                Food recipes 
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/foods/create" >
                                Create food recipe
                            </Link>
                        </Item>
                    </List>
                </Collapse>
                </Title>
            </React.Fragment>
            
        )
    }
}

export default Links