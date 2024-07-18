import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import Selected from './components/selected.jsx'



const App =() => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {
        selectedContact ? (
          <Selected contact={selectedContact} setSelectedContact={setSelectedContact}/>
        ) : (<ContactList  setSelectedContact={setSelectedContact}/>)
      }
      
    </>
  )
};

export default App
