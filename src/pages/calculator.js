import React from 'react';
import './calculator.css';
import { Form, Input, Button, Checkbox, Card , Select } from 'antd';


/* TODO: 
    - change form names to individual to stop dupilcate inputs
    - create std/adv switch with logic to pass basic or adv content
    - build logic maybe
*/ 

const { Option } = Select;

const emissionValues = {
    transportVal: {
        
            vehicleType: {},
            cabinClass: Number,
            airDistance: Number,
            transportMethod: Number,
            transportType: Number,
            pubDistance: Number
        
    },
    /*
    electricityVal: {
        input: Number
    },
    gasVal: {
        input: Number
    },
    wasteVal: {
        input: Number
    },
    waterVal: {
        input: Number
    },
    paperVal: {
        input: Number
    },
    foodAndDrinkVal: {
        input: Number
    },
    eventsVal: {
        input: Number
    }
    */
}

function onFinish(values) {
    
    //maybe scrap this shit

    for(let input in values) {
        //input = key
        //values[input] = value
        if(values[input] != null) {
            console.log('F input key: ' + input + ' value: ' + values[input]);
            for(let property in emissionValues) {
                console.log('E property key: ' + property);
                for(let subProperty in emissionValues[property]) {
                    console.log('E subProperty key: ' + subProperty);
                    if(input.localeCompare(subProperty) === 0) {
                        console.log(subProperty + ' : ' + property[subProperty]);
                        property[subProperty] = values[input];
                        console.log(subProperty + ' : ' + property[subProperty]);
                        break;
                    } 
                }
            }
        }
        
    }
    console.log(values);
};

function calculate(emissionValues) {
    
    const totalEmission = 0;

    
    for(let input in emissionValues) {
        if(emissionValues.hasOwnProperty(input)) {
            totalEmission += parseFloat(emissionValues[input])
        }
    }
    
    const carbonReport = {
        report:
            <div>
                <li>
                    <ul>emissionValues.transportVal</ul>
                </li>
                <span>
                    {{totalEmission}}
                </span>
            </div>
    }
}

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
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <h3>Vehicle</h3>

                    <Form.Item name="vehicleType" label="Vehicle Type">
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

                    <h3>Air Travel</h3>

                    <Form.Item name="cabinClass" label="Cabin Class">
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

                    <Form.Item name="airDistance" label="Distance">
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

                    <Form.Item name="transportMethod" label="Transport Method">
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

                    <Form.Item name="transportType" label="Transport Type">
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

                    <Form.Item name="pubDistance" label="Distance">
                        <Input className="inputBox" type='number' placeholder="Kilometres"/>
                    </Form.Item>

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>

                </Form>

                
        </div>,
    electricity: 
        <div className='calculatorContainer'>

                <Form
                    name="basicElectricity"
                    layout="vertical"
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
  
                    <Form.Item name="consumption" label="Electricity Consumption">
                        <Input placeholder="Kilowatt Hours"/>
                    </Form.Item>

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>

                </Form>


        </div>,
    gas: 
        <div>

                <Form
                    name="basicGas"
                    layout="vertical"
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
  
                    <Form.Item name="lpgConsumption" label="LPG Consumption">
                        <Input placeholder="Litres"/>
                    </Form.Item>
                    
                    <span>OR</span><br/><br/>

                    <Form.Item name="gasConsumption" label="Gas Consumption">
                        <Input placeholder="Litres"/>
                    </Form.Item>

                    <Form.Item name="unitOfMeasurement" label="Unit of Measurement">
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

                    <Form.Item name="stateOrTerritory" label="State or Territory">
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

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>

                </Form>

        </div>,
    waste: 
        <div>

                <Form
                    name="basicWaste"
                    layout="vertical"
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    
                    <Form.Item name="wasteType" label="Waste Type">
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

                    <Form.Item name="wasteWeight" label="Weight">
                        <Input placeholder="Tonnes"/>
                    </Form.Item>

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>

                </Form>

        </div>,
    water: 
        <div>

                <Form
                    name="basicWater"
                    layout="vertical"
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
  
                    <Form.Item name="waterUtilityLocation" label="Water Utility Location">
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

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>

                </Form>

        </div>,
    paper: 
        <div>

                <Form
                    name="basicPaper"
                    layout="vertical"
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
  
                    <Form.Item name="source" label="Source">
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

                    <Form.Item name="paperType" label="Paper Type">
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

                    <Form.Item name="paperWeight" label="Paper Weight">
                        <Input placeholder="Kilograms"/>
                    </Form.Item>

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>

                </Form>

        </div>,
    foodAndDrink: 
        <div>

                <Form
                    name="basicFoodAndDrink"
                    layout="vertical"
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
  
                    <Form.Item name="foodType" label="Food Type">
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

                    <Form.Item name="expenditure" label="Expenditure">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>

                </Form>

        </div>,
    events: 
        <div>

                <Form
                    name="basicEvents"
                    layout="vertical"
                    //requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <h3>Accommodation</h3>

                    <Form.Item name="totalAccommodation" label="Total Spent on Accommodation">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>

                    <h3>Food & Drink</h3>
                    
                    <Form.Item name="totalMeals" label="Total Spent on Meals">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>

                    <Form.Item name="totalDrinks" label="Total Spent on Non-Alcoholic Drinks">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>

                    <Form.Item name="totalBeer" label="Total Spent on Beer">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>

                    <Form.Item name="totalWine" label="Total Spent on Wine">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>

                    <Form.Item name="totalSpirits" label="Total Spent on Spirits">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>
                    
                    <h3>Giveaways & Promotional Materials</h3>

                    <Form.Item name="totalEventProducts" label="Total Spent on Plastic Products">
                        <Input placeholder="$ Amount"/>
                    </Form.Item>

                    <Form.Item className="addEmissionButton">
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
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
            <div>
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
