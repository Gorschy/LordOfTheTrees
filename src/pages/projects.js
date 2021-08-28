import { Card, Col, Row, List, Image } from 'antd';
import '../style.css';
import './projects.css';

const projectList = [
{
    title: 'Project Numero Uno',
    description: 'This is the first project in the list.',
}, {
    title: 'Project Numero Dos',
    description: 'This is the second project in the list.',
}, {
    title: 'Project Numero Tres',
    description: 'This is the third project in the list.',
}, {
    title: 'Project Numero Quatro',
    description: 'This is the fourth project in the list.',
}


]

const projectLeader = [{
    name: "Bill Big",
    email: "bbig@gmail.com",
    icon: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
}]

const teamList = [{
    name: "Billiam Biggus", 
    rank: "Project Leader",
    email: "bigman@gmail.com",
    icon: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
}, {
    name: "Sarah Short", 
    rank: "You",
    email: "sshort@gmail.com",
    icon: "https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg"
}, {
    name: "Invite Team Member", 
    rank: "",
    email: "",
    icon: "data:image/png;base64,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"
}]

const Projects = () => { return(
    <div>

    <Row gutter={12}>
        <Col span={6}> 

            <Card id="projectListCard" title={<div className="cardHeader" id="projectListHeader">Projects</div>}>
            <List
                id="projectListID"
                itemLayout="horizontal"
                dataSource={projectList}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={<div className="headerText">{item.title}</div>}
                    description={<div className="standardText">{item.description}</div>}
                    />
                </List.Item>
                )}
            />

            </Card>

        
        </Col>
        <Col span={12}>
            <Card id="currentProjectCard" title={<div className="cardHeader" id="currentProjectHeader">Current Project</div>} extra={<div className="extraText">Type: Business</div>}>
                <div className="headerText">Project Title</div>
                <div className="standardText">
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </Card>
        
        </Col>
        <Col span={6}>
        <Card id="projectAdminCard" title={<div className="headerText" id="projectAdminHeader">Project Admin</div>}>
            <div id="adminImageHolder"><Image id="adminImage" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/></div>
            
            <List
                itemLayout="vertical"
                dataSource={projectLeader}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={<div className="headerText" id="adminName">{item.name}</div>}
                    description={<div className="standardText" id="adminEmail">{item.email}</div>}
                    />
                </List.Item>
                )}
            />
            </Card>

            <br/>

            <List
                id="membersList"
                itemLayout="horizontal"
                dataSource={teamList}
                renderItem={item => (
                <List.Item>
                    
                    <List.Item.Meta
                    avatar={<Image className="imageIcon" src={item.icon} />}
                    title={<div className="headerText">{item.name}</div>}
                    description={<div className="standardText">{item.email}</div>}
                    />
                    <div className="headerText">{item.rank}</div>
                </List.Item>
                )}
            />

        </Col>

    </Row>

    </div>
    );}
export default Projects;