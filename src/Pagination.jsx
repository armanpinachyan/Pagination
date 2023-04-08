import React from 'react'

const Pagination = ({sliceusers,users}) => {


    const newarr = []
    for(let i =0; i<users.length/5; i++){
        newarr.push(i)
    }

  return (
    <div className='Pagination' >
        {
            newarr.map(el =>
                  <button className='btn' key={el} onClick={()=> sliceusers(el*5, el*5+5)} >{el+1}</button>  
                )
        }
    </div>
  )
}

export default Pagination