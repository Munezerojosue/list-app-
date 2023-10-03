import React, { useState } from 'react'

function TodoList() {
    const [activity,setActivity]=useState("")
    const [listData,setlistData]=useState([])
    function addActivity(){

        
        setlistData((listData)=>{
            const updatedList =[...listData,activity]
            console.log(updatedList)
            setActivity("")
            return updatedList
        })
    }
    function  deleteActivity(i){
        const updatedListData = listData.filter((elem,id)=>{
            return i!=id
        })
        setlistData(updatedListData)
    }
  return (

    < div className='container'>
    <div>
        <div className='card'>
        <h1 className='text'> TodoList</h1>
        <input className='placeholder' type='text' placeholder='type item'
         value={activity}
         onChange={(e)=>setActivity(e.target.value)}/>

         <button className='add' onClick={addActivity}>add item</button>
         <h4  className='text'>Item List:</h4>

         <div className='list'>
        
         { listData !=[] && listData.map((data, i)=>{
                return(
                    
                    <form key={i}>
                      
                        <div className='delete'>
                        <h4>{data}</h4>
                            <button onClick={()=>deleteActivity(i)}>delete</button>
                        </div>
                        
                    </form>
                )
            })
           
         }
     </div>
    </div>
    </div>
    </div>
  )
}

export default TodoList