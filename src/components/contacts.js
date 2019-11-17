
import React  from "react";


const Contacts = ({ contacts }) => {
        return (
            <div>
                {contacts.map((contact) => (
                    <div className="card" key={contact.id}>
                        <div className="card-body">
                            <h5 className="card-title">{contact.amount}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{contact.category}</h6>
                        </div>
                    </div>
                ))}
            </div>
        )
    };



export default Contacts


