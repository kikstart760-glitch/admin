import React from 'react'
import SubscriptionCard from '../Components/SubscriptionCardComponents/SubscriptionCard'
import SubscriptionPlans from '../Components/SubscriptionPlans/SubscriptionPlans'
import RecentSubscriptions from '../Components/RecentSubscriptions/RecentSubscriptions'
import RecentPayments from '../Components/RecentPayments/RecentPayments'

function Subscription() {
  return (
    <div>
        <SubscriptionCard />
        <SubscriptionPlans />
        <RecentSubscriptions />
        <RecentPayments />
    </div>
  )
}

export default Subscription