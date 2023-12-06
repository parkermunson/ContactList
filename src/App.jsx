import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [contactList, setContactList] = useState([])
  const [selectedContact, setSelectedContact] = useState(window.location.hash.slice(1) * 1)

  useEffect(() => {
    const fetchContactList = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      const data = await response.json()

      setContactList(data)
      console.log(contactList)

    }
    fetchContactList()
  }, [])



  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setSelectedContact(window.location.hash.slice(1) * 1)
    })
  }, []);

  const contact = contactList.find((contact) => {
    return selectedContact === contact.id
  })
  console.log(selectedContact)

  return (
    <div>
      <h1> Contact List ({contactList.length}) </h1>
      <h2> Selected Contact </h2>
      {contact ? (
        <div>
          <h2>{contact.name}</h2>
          <h2>{contact.email}</h2>
          <h3>{contact.company.name}</h3>
          <h3>{contact.phone}</h3>
        </div>) : null}
      <ul>
        {contactList.map((contact) => {
          return <li key={contact.id}>
            <a href={`#${contact.id}`} onClick={() => setSelectedContact(contact)}>
              {contact.name}
            </a>
          </li>
        })
        }
      </ul>

    </div>
  )
}

export default App
