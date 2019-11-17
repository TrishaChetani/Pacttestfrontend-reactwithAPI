import React, {Component} from 'react';
import Contacts from './components/contacts';
import CreateContact from './components/createcontact.js';

class App extends Component {
    render() {
        return (
            <div>
                <CreateContact createContact={this.createContact} />
                <br/>
                <Contacts contacts={this.state.contacts}/>
            </div>
        )
    }

    state = {
        contacts: []
    };

    createContact(amount, category) {
        const headers = new Headers({   'Content-Type': 'application/json' });
          const options = {  headers,   method: "POST",   body: [     { amount, category }  ] }
        fetch("http://localhost:9090/ticket/bookTickets", options)
            .then(res => res.text())
            .then((data) => {
                console.log(data)
               // this.setState({contacts: data})
            })
            .catch(console.log)
    }

    displayContact() {
        fetch("http://localhost:9090/ticket/getTickets", {method: "GET"})
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({contacts: data})
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.createContact(100,"test")
        this.displayContact()

    }
}
export default App;
