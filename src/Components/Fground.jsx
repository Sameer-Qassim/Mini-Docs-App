import React from 'react'
import Card from './Card'
import Add from './Add'

function Fground() {
    return (
        <div className=' fixed w-full h-full mt-20 ml-10 mr-10 flex flex-wrap gap-5'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Add/>
        </div>
    )
}

export default Fground