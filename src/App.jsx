
import React, {Fragment} from 'react'
import Provider from './Provider'
import Context from './Context'
import './App.css'


const Agents =()=>{
  return <AgentOne/>;
}
const AgentOne =()=>{
  return <AgentTwo/>;
}

const AgentTwo =()=>{
  return <AgentBond/>;
}

const AgentBond =()=>{
  return(
    <Context.Consumer>
      {context =>(
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission name: {context.data.mname}</p>
          <h2>Mission status: {context.data.accept}</h2>

          <button onClick={context.isMissionAccepted}>Choose status</button>
        </Fragment>
      )}
    </Context.Consumer>
  )
}


const App =()=>{
  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}
export default App

//So here if we want to pass data directly inside children then we don't need to go each and every stage simply we pass data at the child using context
