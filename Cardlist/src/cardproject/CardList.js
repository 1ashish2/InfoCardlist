import React from 'react';
import User from'./Users';
const CardList =({profile}) =>{
   
        return (
            <div className="container my-4">
                <div className="row"> 
                    {profile.map((usr) =>
                    <div className='col col-sm-3 col-md-3 col-lg-3 mb-2' >
                    <User key={usr.id} usr={usr} />
                    </div>
                     )}
                </div>
                </div>
          
        );
                    
}
export default CardList;



