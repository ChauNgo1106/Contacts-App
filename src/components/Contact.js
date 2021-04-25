import { FaTimes } from 'react-icons/fa'

const Contact = ({contact , onDelete , onSelect}) => {
    return (
        // backtick if interpolating a var into the string. and calling
        //another var using ${}
        <div className = {`task ${contact.selected ? 'contact' : ''}`} onDoubleClick={() => onSelect(contact.id)}>
            <h3>{contact.name} 
            <FaTimes 
            style={{color:'red',
            cursor: 'pointer'}} 
            onClick ={ () => onDelete(contact.id)}
            />
            </h3>
            <p>Cell: {contact.cellNum}</p>
            <p>Email: {contact.email}</p>
        </div>
    )
}

export default Contact
