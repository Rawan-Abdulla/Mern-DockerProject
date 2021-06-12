import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { FoodsList, FoodsInsert, FoodsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/foods/list" exact component={FoodsList} />
                <Route path="/foods/create" exact component={FoodsInsert} />
                <Route
                    path="/foods/update/:id"
                    exact
                    component={FoodsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App