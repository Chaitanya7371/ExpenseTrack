import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function Expensepage() {

    const allExpense = useSelector(state => state.tracker.expenses)

    console.log(allExpense , "fro expe");
    
  return (
    <div className='w-[100%] h-[100vh] flex  flex-col items-center'>
        <h1>EXPENSES</h1>
        <div className="w-[85%] flex flex-wrap gap-3 bg-textcolor">
            {
                allExpense?.map((item, index) => (
                    <Card item = {item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Expensepage