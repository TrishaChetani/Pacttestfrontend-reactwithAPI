
import React, {Component} from "react";
import '../App.css';
import '../App.js';


class CreateContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Insert_amount: " ",
            Insert_category:" ",
        }
    };


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    create = () => {
        this.props.createContact(this.state.Insert_amount, this.state.Insert_category);
    }

    render() {
        return (
             <div onSubmit={this.create}>
                <center><h1>Food List</h1></center>
                <label className="Insert_amount" htmlFor="Insert_amount" >Insert Amount<span className="required">*</span>
                </label>
                 <input type="number"  name="Insert_amount"  placeholder={"eg:100"} value={this.state.Insert_amount} onChange={this.handleChange.bind(this)} required/>
                <label className="Insert_category" htmlFor="Insert_category" >Insert Category<span className="required">*</span>
                </label>
                 <input type="text" name="Insert_category" placeholder={"eg: Category"} value={this.state.Insert_category} onChange={this.handleChange.bind(this)} required/>
                 <br/>
                <button onClick={this.create} type ="submit" className="btn">
                   Enter Food!
                </button>
                <br/>
            </div>

        );
    }

}
export default CreateContact;

