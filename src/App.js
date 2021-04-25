import Header from './components/Header'
import Contacts from './components/Contacts'
//useEffect when we want to make a change when reloading the page
import { useState, useEffect } from 'react'
import { FaTasks } from 'react-icons/fa'
import AddContact from './components/AddContact'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  //put all data inside this function as state (immutable data structure)

  const [showAddContact, setShowAddContact] = useState(false)

  //we will use json server to initiate our data

  const [contacts, setContacts] = useState([{
      id: 1,
      name: 'Tam Nguyen',
      cellNum: '612234567',
      email: 'nguyentam@gmail.com',
      selected: true
    },
    {id: 2,
    name: 'Chau Ngo',
    cellNum: '8120991234',
    email: 'baochau@gmail.com',
    selected: true
  },
  ,
  {
    id: 3,
    name: 'Nhi Ngo',
    cellNum: '892865',
    email: 'nhingo@gmail.com',
    selected: true
  },])

  //Delete
  const deleteContact = (id) => {
    //only show the id is differ from id argument ==> trick in JavaScript
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  //select some contacts
  const select = (id) => {

    setContacts(
      contacts.map((contact) =>
        //all selected will map into opposite value when we double click it
        contact.id === id ? { ...contact, selected: !contact.selected } : contact))
  }

  //Add a new contact
  const addContact = (contact) => {
    //create random id in case we are not going to deal with back end
    const id = Math.floor(Math.random() * 10000) + 1
    //new id with contact ==> generate an object
    const newContact = { id, ...contact }
    //add this object into contacts list
    setContacts([...contacts, newContact])

  }
  return (
    <Router>
      <div className="container">
        {/* pass title as parameter of Header */}
        <Header
          title={'Contacts'}
          onAdd={() => setShowAddContact(!showAddContact)}
          showAdd={showAddContact} />
        {/* if showAddContact is true show AddContact, otherwise, not show */}

        <Route path='/' exact render={(props) => (
          <>
            {showAddContact && <AddContact onAdd={addContact} />}
            {contacts.length > 0 ? <Contacts
              contacts={contacts}
              onDelete={deleteContact}
              onSelect={select} />
              : 'No More Contacts To Show'
            }
          </>
        )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
