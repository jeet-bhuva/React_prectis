import React, { Component } from 'react'

export default class Error extends Component {
    state = {
        hesError : false
    }

    static getDerivedStateFromError(error){
        return {hesError : true}
    }

    componentDidCatch(error , info){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hesError){
        return <h3>Error : Image Not Found</h3>
    }
    return this.props.children;
  }
}
