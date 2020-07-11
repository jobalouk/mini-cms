import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Entry from './Entry'
import BackButton from './BackButton'


export default function App() {
  return (
    <main style={{width: "700px"}}>
      <BackButton />
      <Switch>
        <Route path="/:slug/" component={Entry} />
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
 )
}
