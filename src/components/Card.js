import React from 'react'

const Card = ({item}) => {
    var seat="";
    var loc="";
    for(let i=0;i<item.seat.length;i++){
        seat+=item.seat[i];
        if(i!==item.seat.length-1)
            seat+=",";
    }

    for(let i=0;i<item.region.length;i++){
        loc+=item.region[i];
        if(i!==item.region.length-1)
            loc+=",";
    }
    // console.log(item.name + seat);
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.logoURL} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Seat:</strong> 
                    {seat} 
              </li>
              <li>
                <strong>Region:</strong> {loc}
              </li>
            </ul>
                <div className="text-center">{item.words}</div> 
          </div>
        </div>
      </div>

    )
}

export default Card
