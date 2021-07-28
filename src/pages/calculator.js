import React from 'react';
import './calculator.css';
import { Form, Input, Button, Checkbox, Card , Select } from 'antd';

/* TODO: 
    - change form names to individual to stop dupilcate inputs
    - create std/adv switch with logic to pass basic or adv content
    - build logic maybe
*/ 

const { Option } = Select;

const tabList = [
    {
        key: 'transport',
        tab: 'Transport',
    },
    {
        key: 'electricity',
        tab: 'Electricity',
    },
    {
        key: 'gas',
        tab: 'Gas',
    },
    {
        key: 'waste',
        tab: 'Waste',
    },
    {
        key: 'water',
        tab: 'Water',
    },
    {
        key: 'paper',
        tab: 'Paper',
    },
    {
        key: 'foodAndDrink',
        tab: 'Food & Drink',
    },
    {
        key: 'events',
        tab: 'Events',
    },
];
  
const basicContentList = {
    transport: 
        <div>

                <Form
                    name="basicTransport"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
                    <h3>Vehicle</h3>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">a</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <h3>Air Travel</h3>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">4</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <h3>Public Transport</h3>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input className="inputBox" placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

                
        </div>,
    electricity: 
        <div>

                <Form
                    name="basicElectricity"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>


        </div>,
    gas: 
        <div>

                <Form
                    name="basicGas"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>
                    
                    <span>OR</span><br/><br/>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                </Form>

        </div>,
    waste: 
        <div>

                <Form
                    name="basicWaste"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
                    
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
    water: 
        <div>

                <Form
                    name="basicWater"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                </Form>

        </div>,
    paper: 
        <div>

                <Form
                    name="basicPaper"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
    foodAndDrink: 
        <div>

                <Form
                    name="basicFoodAndDrink"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
    events: 
        <div>

                <Form
                    name="basicEvents"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
};

const advContentList = {
    transport: 
        <div>

                <Form
                    name="basicTransport"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
                    
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            className="a"
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="a">a</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            className="b"
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

                
        </div>,
    electricity: 
        <div>

                <Form
                    name="basicElectricity"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>


        </div>,
    gas: 
        <div>

                <Form
                    name="basicGas"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>
                    
                    <span>OR</span><br/><br/>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                </Form>

        </div>,
    waste: 
        <div>

                <Form
                    name="basicWaste"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
                    
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
    water: 
        <div>

                <Form
                    name="basicWater"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                </Form>

        </div>,
    paper: 
        <div>

                <Form
                    name="basicPaper"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
    foodAndDrink: 
        <div>

                <Form
                    name="basicFoodAndDrink"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="dropdown" label="Dropdown" rules={[{ required: true }]}>
                        <Select
                            style={{ width: 300 }}
                            placeholder="Please Select"
                            allowClear
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
    events: 
        <div>

                <Form
                    name="basicEvents"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    scrollToFirstError
                >
  
                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                    <Form.Item name="input" label="Input" rules={[{ required: true }]}>
                        <Input placeholder="Enter Input"/>
                    </Form.Item>

                </Form>

        </div>,
};

class calculator extends React.Component {

    state = {
        key: 'transport',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    render() {
        return (
            <div className="site-card-border-less-wrapper">
                <Card
                    className="calculatorCard"
                    bordered={false} 
                    style={{ width: 1300 }} 
                    title="Carbon Calculator"
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, 'key');
                    }}
                >
                    {basicContentList[this.state.key]}
                </Card>
                        
                            
            </div>
        );

        
    }
        
}

export default calculator;
