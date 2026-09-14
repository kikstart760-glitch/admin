import React from 'react'
import UserCard from '../Components/UserCardComponent/UserCard'
import UserTable from '../Components/UsertableComponent/UserTable'


function UserControl() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <UserCard/>
      <UserTable/>
    </div>
  )
}

export default UserControl
