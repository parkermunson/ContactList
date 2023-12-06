function SingleContact({contact}) {
    console.log('Contact object:', contact)



    return (
    <div>
      <h2>{contact.email}</h2>
      <h3> {contact.company} </h3>
      <h3> {contact.phone} </h3>
    </div>
    )
  }
  
  export default SingleContact