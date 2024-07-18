import { react } from 'react'
import  { useEffect, useState } from 'react'
import ContactRow from './contactRow.jsx'
import Selected from './selected.jsx'

const ContactList = ({ setSelectedContact }) => {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const responseJson = await response.json();
      setContactInfo(responseJson);
      // const contactInfo = responseJson
      // console.log(responseJson[1].name)
    }
    getContacts();
  },[]);
 
  console.log('Contact info state:', contactInfo);


  return (
    <table>
      <thead>
        <tr>
          <th colSpan='3'>Contact list</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          contactInfo.map((contact) => {
            return <ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact}/>
            
            
          })
        }
      </tbody>
    </table>
  );
}

export default ContactList;