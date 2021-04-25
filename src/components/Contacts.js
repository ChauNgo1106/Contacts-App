import Contact from './Contact'
import { useState } from 'react'
// contacts list as argument of Contacts function
const Contacts = ({contacts , onDelete , onSelect}) => {

    return (
        <>
            {/* Show all contacts list */}
            {contacts.map((contact) =>
                // must have unique key or id
                (<Contact 
                    key={contact.id}
                    contact = {contact} 
                    onDelete = {onDelete}
                    onSelect ={onSelect}/>
                ))}
        </>
    )
}

export default Contacts
