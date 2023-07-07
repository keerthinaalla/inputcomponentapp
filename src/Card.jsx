import React from 'react'


export default function Card(props) {

    return (
        <div className='row'>

            <div className='col-md-6 card m-auto mt-5'>
                <div className='card-body'>
                    <p>Item:{props.item}</p>
                    <p>Price:{props.price}</p>
                    <p>Product Left:{props.count}</p>
                </div>
            </div>


        </div >
    )
}
