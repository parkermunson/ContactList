function AllContacts({contacts, hash}) {

    return (
        <ul>
          {
            contacts.map((contact) => {
              return (
              <li key={contact.id} className={hash === contact.id ? "selected" : ""}> 
                <a href={`#${contact.id === hash ? "" : contact.id}`}>
                  {contact.name}
                </a>
              </li>
              )
            })
          }
        </ul>
        
    )
  }
  
  export default AllContacts