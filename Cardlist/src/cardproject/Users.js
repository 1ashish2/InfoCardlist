import React from 'react';

const Users =({usr:{login,avatar_url,html_url,id}})=> {
    //here we r destructuring
       // const {login,avatar_url,html_url}=props.usr;
       const text=login.toUpperCase();
        return (
            <div className='card bg-warning' id={id}>
            <div className='card-body text-center'>
                <img src={avatar_url} className="rounded-circle"
                 style={{width:'60px'}}></img>
                 <div className="container mt-2">
                 <h6 className="text-left">Id :{id}</h6>
                 <h6 className="text-left">Name :{text}</h6>
                 </div>
                
                 <div className="mt-4">
                     <a href={html_url} className='btn btn-primary'>More</a>
                     <input type="submit" className="btn btn-primary m-1"  onClick={()=>{
                         document.getElementById(id).style.display='none';
                         //console.log(document.getElementById(id));
                     }} value="Delete"></input>
                 </div>
                
            </div>
            </div>
        );
     
}


export default Users;