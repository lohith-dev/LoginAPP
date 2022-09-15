import React, { Component } from 'react'
import Child  from './Child';

export default class Useeffecttest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    //  myTimer() {
    //     const date = new Date();
    //     console.log(date.toLocaleTimeString());
    //   }
    componentDidMount() {
      console.log("hello");
      // document.title = `You clicked ${this.state.count} times`; 
    }

      componentDidUpdate() {
        console.log("hi");
        // document.title = `You clicked ${this.state.count} times`;
        // // this.interval = setInterval(this.myTimer() , 100);
       }

      
  render() {
    return (
      <div>
          {/* <p>You clicked  times</p>
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 });
          
        }}>
          Click me
        </button>
        <Child/> */}

     <button type='submit'>Verify</button>
      </div>
    )
  }
}
