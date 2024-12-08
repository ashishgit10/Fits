import React from 'react'

import Header2 from '../Header2'
import StepsProcess from '../Utils/StepsProcess'
import Cardfd from '../Utils/Cardfd'
import InspectionCard from '../Utils/InspectionCard'

import Corousel from '../Corousel'
import NestedQue from './NestedQue'

function FireDept() {
  return (
    <div>
      <Header2 />
      <Corousel />
      <StepsProcess />
      <div>
        <NestedQue />
      </div>
      <div className='mb-10'>
        <InspectionCard />
      </div>
    </div>
  )
}

export default FireDept