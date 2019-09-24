import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // //deprecated
  // componentWillMount() {
  //   console.log("componentWilldMount...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // //deprecated
  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // //deprecated used getDerivedStateFromProps instead
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevProps) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>Test Component</h1>
        <h2>Title</h2>
        <p>{title}</p>
        <h2>Body</h2>
        <p>{body}</p>
      </div>
    );
  }
}
