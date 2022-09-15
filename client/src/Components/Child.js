import React, { Component } from 'react'

export default class Child extends Component {


componentDidUpdate() {
        console.log("hi from child");
        // document.title = `You clicked ${this.state.count} times`;
        // // this.interval = setInterval(this.myTimer() , 100);
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}
