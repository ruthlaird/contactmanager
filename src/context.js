import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        //payload = entire contact with name, email, phone in; adds payload to current contacts
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        //for each contact if contact id is same as payload's id (id from the response), set contact to payload, else set to contact
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: "John Doe",
      //   email: "jdoe@gmail.com",
      //   phone: "555-555-5555"
      // },
      // {
      //   id: 2,
      //   name: "Karen Williams",
      //   email: "karen@gmail.com",
      //   phone: "222-222-2222"
      // },
      // {
      //   id: 3,
      //   name: "Henry Johnson",
      //   email: "henry@gmail.com",
      //   phone: "111-111-1111"
      // }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ contacts: response.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
