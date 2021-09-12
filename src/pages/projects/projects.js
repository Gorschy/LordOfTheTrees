import '../../style.css';
import './projects.css';
import React, { useContext, useEffect } from 'react';
import { Card } from 'antd';
import { UserContext } from '../UserContext';
import { Redirect } from 'react-router'
import { Auth } from 'aws-amplify';

const Projects = () => { 
    
    const {loggedIn} = useContext(UserContext);

    useEffect(() => {
        displayUserDetails();
    }, []);

    const displayUserDetails = async () => {
        //Capture current authed user
        let user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;
        console.log(attributes);

        
    }
    

    /* ------ Mock Data ------ */

    
    const projects = {
        id: 1,
        name: 'Test Project',
        description: 'Test Description'
    }

    /* ----------------------- */

    return (
    
        <div>
            { 
                loggedIn ? (
                
                    <div className='container'>
                        <div className='column'>
                            
                            <div id='projectListCard'>
                                <h3 className='centerContent'>Projects</h3>
                            </div>

                            <div id='carbonReportListCard'>
                                <h3 className='centerContent'>Carbon Reports</h3>
                            </div>
                            
                        </div>
                        <div className='projectSummary'>
                            <div className='projectAnalytics'>
                                <h3 className='centerContent'>Project Summary</h3>
                            </div>
                            <div className='projectBreakdown'>
                                <h3 className='leftContent'>Project Summary</h3>
                            </div>
                        </div>
                        <div className='column'>
                            <Card
                                id='projectAdminCard'
                                bordered={false}
                                title={<h3 id="centreContent">Project Admin</h3>}
                            />
                        
                            <Card
                                id='membersList'
                                bordered={false}
                                title={<h3 id="centreContent">Team Members</h3>}
                            />
                        </div>
                    </div>

                ) : ( <Redirect to="/home"/> ) 
            } 
        </div>
        
    );
}

export default Projects;