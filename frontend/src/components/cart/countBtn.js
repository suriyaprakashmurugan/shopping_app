import React, { useState, useEffect } from 'react';
import './cart.css'

export default function Countbtn({price, idx, itemDetails, setItemDetails}) {

    const [count, setCount] = useState(1); 
    const amt = count * Math.ceil(price);

    const dicre = () => {
        if(count > 1){
        setCount(count-1);
        }
    }
    
    const incre = () => {
        if(count < 10)
        setCount(count+1)
    }

    useEffect(()=>{
        itemDetails[idx].qty = count;
        itemDetails[idx].cost = count * Math.ceil(price);
    },[incre, dicre])

  return (
    <div>
        <div className='d-flex'>
            <div className="input-group mb-3">
                <button className='sub-but' onClick={dicre}> - </button>
                <input type="number" className='count-but text-center' readOnly
                min={1}
                value={count}
                onChange={(e)=>{
                    setCount(e.target.value)
                }}/>
                <button className='add-but' onClick={incre}> + </button>                      
            </div>
        <span className='rate'>${amt}</span>                    
        </div>
    </div>
  )
}