import React from 'react'
import Card from './Card';
import Spinner from './Spinner';
const Grid = ({isLoading, items}) => {
    return isLoading ? 
        <Spinner /> :
        <section className="cards">
            {items.map((item)=>
            (<Card key={item._id} item={item} />))}
        </section>
}

export default Grid
