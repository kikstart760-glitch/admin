import React from 'react'
import PermissionCard from '../Components/PermissionCardComponents/PermissionCard'
import PermissionManagementComponent from '../Components/PermissionManagement/PermissionManagementComponent'

function Permission() {
  return (
    <div>
      <PermissionCard />
      <PermissionManagementComponent />
    </div>
  )
}

export default Permission