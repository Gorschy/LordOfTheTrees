import React, { useContext } from 'react';
import '../../style.css';
import './projects.css';
import { UserContext } from '../UserContext';
import { Redirect } from 'react-router'


function Projects() { 
    
    const {loggedIn} = useContext(UserContext);

    /* ------ Mock Data ------ */

    const testUser = {

    }

    const projects = {
        id: 1,
        name: 'Test Project',

    }

    /* ----------------------- */

    return (
    
        <div>
            
        { loggedIn 
        ? (
        
            <div></div>

        ) 
        
        : (
            <Redirect to="/home"/>
        ) 
        }
        
        </div>
        
    );
}

export default Projects;