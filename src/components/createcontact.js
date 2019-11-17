
import React, {Component} from "react";
import '../App.css';


class CreateContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Insert_amount: 0,
            Insert_category:"test",
            hidden: true
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    create = () => {
        this.props.createContact(this.state.Insert_amount, this.state.Insert_category);
    }

    render() {
        return (

            <div>
                <center><h1>Ticket List</h1></center>
                <br/>
                <table>
                    <tr>
                        <td>
                <label className="Insert_amount" htmlFor="Insert_amount" placeholder="Insert_amount">Insert Amount
                    <span className="required">*</span>
                </label>
                <br/>
                <input type="number" step="0.01" name="Insert_amount"  value={this.state.Insert_amount} onChange={this.handleChange} required/>
                <br/>
                        </td>

                        <td>
                <label className="Insert_category" htmlFor="Insert_category" placeholder="Insert_category">Insert Category
                    <span className="required">*</span>
                </label>
                <br/>
                <input type="text" step="0.01" name="Insert_category" value={this.state.Insert_category} onChange={this.handleChange} required/>
                <br/>
                        </td>
                    </tr>
                </table>
                <br/>
                <button onClick={this.Create} type ="submit" className="btn">
                   Enter Ticket
                </button>
                <br/>
                <br/>
            </div>

        );
    }

}
export default CreateContact;
