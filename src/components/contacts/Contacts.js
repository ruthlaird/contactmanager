import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "John Doe",
  //         email: "jdoe@gmail.com",
  //         phone: "555-555-5555"
  //       },
  //       {
  //         id: 2,
  //         name: "Karen Williams",
  //         email: "karen@gmail.com",
  //         phone: "222-222-2222"
  //       }
  //     ]
  //   };

  // Moved to context API
  //   deleteContact = id => {
  //     //use destructuring to get current contacts from state
  //     const { contacts } = this.state;

  //     //filter those contacts that aren't the current id
  //     const newContacts = contacts.filter(contact => contact.id !== id);

  //     //set state to the new contacts with the id removed
  //     this.setState({ contacts: newContacts });
  //   };

  render() {
    // const { contacts } = this.state;

    return (
      // <div>
      //   {contacts.map(contact => (
      //     <h1>{contact.name}</h1>
      //    ))}
      // </div>

      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            //React fragment = sudo element that's not added to the DOM
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  // name={contact.name}
                  // email={contact.email}
                  // phone={contact.phone}
                  contact={contact} //pass in entire contact object rather than each prop individuually
                  //   deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
