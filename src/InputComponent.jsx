import React, { createContext, useState } from 'react'
import Card from './Card'

export default function InputComponent() {
    const [data, setData] = useState({
        item: '',
        price: '',
        // count: 0

    })
    const [count, setCount] = useState(0)
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const incHandler = () => {
        // setData(...data, data.count = count + 1)
        setCount(count + 1)
    }

    const decHandler = () => {
        // setData(...data, data.count = count - 1)
        setCount(count - 1)
    }
    // const passData = createContext();

    return (
        <div className='row'>
            <Card count={count} item={data.item} price={data.price} />
            {/* <passData.Provider value={count}><Card /></passData.Provider> */}
            <div className='col-md-6 m-auto mt-5'>
                <input type='text' name="item" value={data.item} onChange={changeHandler} /><br /><br />
                <input type='text' name="price" value={data.price} onChange={changeHandler} /><br />
                <div className='mt-5'>
                    <button className='btn btn-success' onClick={incHandler}>Inc</button>
                    <span className='ms-3 me-3 bg-dark text-white p-2'>{count}</span>
                    <button className='btn btn-warning' onClick={decHandler}>Dec</button>
                </div>
            </div>


        </div>
    )
}
