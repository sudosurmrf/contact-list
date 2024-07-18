import { useState } from 'react'

const Selected = ({ contact, setSelectedContact }) => {
  
  


  return (
    <>
     <h2>Selected Contact</h2>
     <p>Name: {contact.name}</p>
     <p>Email: {contact.email}</p>
     <p>Phone: {contact.phone}</p>
     <button onClick={() => setSelectedContact(null)}>Back</button>
    </>
  );

};

export default Selected