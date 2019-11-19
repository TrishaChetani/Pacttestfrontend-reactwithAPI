import React, {Component} from 'react';
import Contacts from './components/contacts';
import CreateContact from './components/createcontact.js';
let requestUrl = "http://localhost:9090";
class App extends Component {


    state = {
        contacts: []
    };

    createContact(amount, category) {
        fetch(requestUrl +'/ticket/bookTickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([{amount:amount,category:category}])
        }).then(res => res.text())
            .then((data) => {
               // this.setState({contacts: data})
            })
            .catch(console.log)
    }

    displayContact() {
        fetch(requestUrl+ "/ticket/getTickets", {method: "GET"})
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({contacts: data})
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.createContact()
        this.displayContact()

    }


    render() {
        return (
            <div>
                <CreateContact createContact={this.createContact} />
                <br/>
                <Contacts contacts={this.state.contacts}/>
            </div>
        )
    }
}
export default App;
