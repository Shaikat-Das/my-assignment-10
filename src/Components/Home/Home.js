import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Activity from '../Activity/Activity';
import './Home.css'

const activity = [{

name: 'child support',
img: 'childSupport.png'
}, 

{
name: 'Animal Shelter',
img: 'animalShelter.png'
},

{
    name: 'Baby sit',
    img: 'babySit.png'
},

{
    name: 'Good Education',
    img: 'goodEducation.png'
},

{
    name: 'River Clean',
    img: 'riverClean.png'
},

{

    name: 'child support',
    img: 'childSupport.png'
    }, 
    
    {
    name: 'IT help',
    img: 'ITHelp.png'
    },
    
    {
        name: 'Study Group',
        img: 'studyGroup.png'
    },
    
    {
        name: 'School Suffiles',
        img: 'schoolSuffiles.png'
    },
    
    {
        name: 'River Clean',
        img: 'riverClean.png'
    },
    
];

const Home = () => {
    return (
        <div >
            <div className="App">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <Form className="home-first-part">
                    <FormControl type="text" placeholder="Search" className="col-md-2" />
                </Form>
                <Button>Search</Button>
            </div>
            <div className="row">
                {
                    activity.map(activity =><Activity activity={activity}></Activity>)
                }
            </div>




        </div>
    );
};

export default Home;