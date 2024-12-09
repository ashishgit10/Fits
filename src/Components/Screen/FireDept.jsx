import React from 'react'
import Header2 from '../Header2'
import StepsProcess from '../Utils/StepsProcess'
import InspectionCard from '../Utils/InspectionCard'
import Corousel from '../Corousel'
import NestedQue from './NestedQue'



function FireDept() {
  return (
    <div>
      <Header2 />
      <Corousel />
      <div className='m-auto max-w-[90%] flex justify-around py-10'>
        <InspectionCard />
      </div>
    </div>
  )
}

export default FireDept