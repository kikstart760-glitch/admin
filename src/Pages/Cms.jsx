import React from 'react'
import AdduserModal from '../Components/ModalComponents/AdduserModal/AdduserModal'

function Cms() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <button className='btn btn-primary' onClick={() => setModalShow(true)}>Add User</button>
      <AdduserModal 
        show={modalShow} onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Cms
