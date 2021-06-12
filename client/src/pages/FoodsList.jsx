import React, { Component } from 'react'
import ReactTable from 'react-table'



import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'





const Update = styled.div`
    color: #ccffcc;
    background-color:#df9fdf;
    cursor: pointer;
    padding:7px;
width:100px;

`
const Wrapper = styled.div`
 padding:15px;
 background-color:#e6e6ff;
 
 font-weight: 600;
 font-size: 19px;
 
 

    
`
const Delete = styled.div`
    color: #ffe6e6;
    background-color:#732673;
    padding:7px;
width:100px;
    cursor: pointer;
`

class UpdateFood extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/foods/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteFood extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Are you sure you want to delete this recipe ${this.props.id} ?`,
            )
        ) {
            api.deleteFoodById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class FoodsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllFoods().then(foods => {
            this.setState({
                foods: foods.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { foods, isLoading } = this.state
        console.log('TCL: foodsList -> render -> foods', foods)

        const columns = [
            {
                Header: 'Ingredients -- >',
                accessor: 'ing',
            
           
      
            },
            {
                Header: 'Recipe -->',
                accessor: 'rec',
               
               
            },
          
          
            {
                Header: 'Actions',
                accessor: 'col4',
              
                Cell: function(props) {
                    return (
                        <span >

                            <UpdateFood id={props.original._id} />
                          
                            <DeleteFood id={props.original._id} />
                        </span>
                    )
                },
           
              
              
            },
        ]

        let showTable = true
        if (!foods.length) {
            showTable = false
        }

        return (
         
          <Wrapper>
                {showTable && (
                    <ReactTable 
                        data={foods}
                        columns={columns}
                        loading={isLoading}
                     
                    />
                )}
           </Wrapper>
        )
    }
}

export default FoodsList