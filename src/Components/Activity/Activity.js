import React from 'react';
import { Link } from 'react-router-dom';
// import childSupport from'../../images/childSupport.png';

const Activity = ({activity}) => {
    return (
        
      
            <div className="col-md-3">
                 <Link to = "/Login"> <img style={{height:'300px', margin: '50px' }} src={require(`../../images/${activity.img}`)} alt=""></img></Link>
                 <Link to = "/Login"><h3 style={{margin: '50px' }}>{activity.name}</h3></Link>
            </div>

    
        
        
    );
};

export default Activity;