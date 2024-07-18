import { useState } from 'react'
import ContactList from './components/ContactList.jsx'




const App =() => {
  const [selectedContact, setSelectedContact] = useState({});

  return (
    <>
      
      <ContactList />
    </>
  )
};

export default App
