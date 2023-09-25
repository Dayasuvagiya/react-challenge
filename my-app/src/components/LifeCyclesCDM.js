import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifecyclesCDMChild'

export class LifeCyclesCDM extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: 'loading'
    }
  }
  
  getDate(){
    setTimeout(() => {
        this.setState({
            data: 'loaded'
        })
    }, 3000)
  }

  componentDidMount() {
    this.getDate()
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild />
      </div>
    )
  }
}

export default LifeCyclesCDM