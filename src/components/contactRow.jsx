// import ContactList from './ContactList.jsx'

const ContactRow = ({setSelectedContact, contact}) => {

  return (

    <tr onClick={() => setSelectedContact(contact)}>

        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
  );

} 

export default ContactRow;