import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
font-size:40px;

`
const br = styled.br.attrs({
    className: 'br',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-left:150px;
    font-family: Arial, Helvetica, sans-serif;
    font-size:30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control form-control-sm',
})`
    margin: 5px;
    width:300px;
    height:420px;
`

const Text = styled.input.attrs({
    className: 'form-control form-control-lg',
})`
    margin: 5px;
    height:210px;
`
const Button = styled.button.attrs({
    className: `btn btn-dark`,
})`
    margin: 15px 15px 15px 5px;
    background-color:#cc66cc;

`

const CancelButton = styled.a.attrs({
    className: `btn btn-light`,
})`
    margin: 15px 15px 15px 5px;
    background-color:#ecc6ec;
`

class FoodsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rec: '',
            ing: '',
       
        }
    }

    handleChangeInputRec = async event => {
        const rec = event.target.value
        this.setState({ rec })
    }



    handleChangeInputIng = async event => {
        const ing = event.target.value
        this.setState({ ing })
    }

    handleIncludeFood = async () => {
        const { rec,ing } = this.state
      
        const payload = { rec, ing }

        await api.insertFood(payload).then(res => {
            window.alert(`Great Job ! Recipe inserted successfully`)
            this.setState({
                rec: '',
                ing: '',
             
            })
        })
    }

    render() {
        const {rec,ing } = this.state
        return (
            <Wrapper>
                <br></br>
                <Title> ــــــــــــــــــــــ</Title>

                
                <Title> Food recipies </Title>
                <Label>Ingredients List  </Label>
                <InputText
                    type="text"
                
                    value={ing}
                    onChange={this.handleChangeInputIng}
                />

                <Label>What is your recipe ?  </Label>
                <Text
                    type="text"
                    value={rec}
                    onChange={this.handleChangeInputRec}
                />

               

           

                <Button onClick={this.handleIncludeFood}>Add this recipe</Button>
                <CancelButton href={'/foods/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default FoodsInsert