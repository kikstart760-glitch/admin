import React from 'react'
import UserCard from '../Components/UserCardComponent/UserCard'
import UserTable from '../Components/UsertableComponent/UserTable'
import AdduserModal from '../Components/ModalComponents/AdduserModal/AdduserModal'

function UserControl() {

  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <div>
      <UserCard/>
      <UserTable/>
      <button className='btn btn-primary' onClick={() => setModalShow(true)}>Add User</button>
      <AdduserModal 
        show={modalShow} onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default UserControl
