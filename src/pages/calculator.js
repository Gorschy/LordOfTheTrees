import React from 'react';
import { Form, Input, Button, Card , Select, Tabs, Layout } from 'antd';
import './calculator.css';


/* TODO: 
    - create std/adv switch with logic to pass basic or adv content
    - OUTPUT DATA TO SECONDARY CARD (TABLE MAYBE)
    - build logic maybe
*/ 

const { Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;

const Calculator = () => {

    const [form] = Form.useForm();
    
    function addEmissions() {
        
        const values = form.getFieldValue();
        
        const emissionValues = {
           
            transportValues: {
                vehicleType: values.vehicleType,
                cabinClass: values.cabinClass,
                airDistance: values.airDistance,
                transportMethod: values.transportMethod,
                transportType: values.transportType,
                pubDistance: values.pubDistance,
            },
           
            electricityValues: {
                consumption: values.consumption
            },

            gasValues: {
                lpgConsumption: values.lpgConsumption,
                gasConsumption: values.gasConsumption,
                unitOfMeasurement: values.unitOfMeasurement,
                stateOrTerritory: values.stateOrTerritory
            },

            wasteValues: {
                wasteType: values.wasteType,
                wasteWeight: values.wasteWeight 
            },

            waterValues: {
                waterUtilityLocation: values.waterUtilityLocation
            },
            
            paperValues: {
                source: values.source,
                paperType: values.paperType,
                paperWeight: values.paperWeight
            },

            foodAndDrinkValues: {
                foodType: values.foodType,
                expenditure: values.expenditure
            },

            eventsValues: {
                totalAccommodation: values.totalAccommodation,
                totalMeals: values.totalMeals,
                totalDrinks: values.totalDrinks,
                totalBeer: values.totalBeer,
                totalWine: values.totalWine,
                totalSpirits: values.totalSpirits,
                totalEventProducts: values.totalEventProducts
            }
        };
        
        //output = calculateEmissions(emissionValues);

        
       
        console.log(emissionValues);
        
        
    }

    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
          }
        }
        return sum;
      }

    function callback(key) {
        console.log(key);
    }

    return (
           
        <div>
            <Card
                className="calculatorCard"
                bordered={false} 
                style={{ width: 1300 }} 
                title="Carbon Calculator"
            >
  
                    <Tabs defaultActiveKey="Transport" onChange={callback}>                          

                        <TabPane tab="Transport" key="Transport">
                                    <div>    
                                        <Form
                                            form={form}
                                            onFinish={addEmissions}
                                            name="basicTransport"
                                            layout="vertical"
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
                                                <Input className="inputBox" type='number' placeholder="Kilometres" />
                                            </Form.Item>

                                            <Form.Item className="addEmissionButton">
                                                <Button type="primary" htmlType="submit">
                                                    Add
                                                </Button>
                                            </Form.Item>
                                        </Form>                
                                    </div>
                                </TabPane>

                        <TabPane tab="Electricity" key="Electricity">
                                    <div>                            
                                        <Form
                                            form={form}
                                            onFinish={addEmissions}
                                            name="basicElectricity"
                                            layout="vertical"
                                            scrollToFirstError
                                        >

                                            <Form.Item name="consumption" label="Electricity Consumption">
                                                <Input className="inputBox" type='number' placeholder="Kilowatt Hours"/>
                                            </Form.Item>

                                            <Form.Item className="addEmissionButton">
                                                <Button type="primary" htmlType="submit">
                                                    Add
                                                </Button>
                                            </Form.Item>
                                        </Form>                
                                    </div>
                                </TabPane>

                        <TabPane tab="Gas" key="Gas">
                                    <div>
                                        <Form
                                            form={form}
                                            onFinish={addEmissions}
                                            name="basicGas"
                                            layout="vertical"
                                            scrollToFirstError
                                        >

                                            <Form.Item name="lpgConsumption" label="LPG Consumption">
                                                <Input className="inputBox" type='number' placeholder="Litres"/>
                                            </Form.Item>
                                                
                                            <span>OR</span><br/><br/>

                                            <Form.Item name="gasConsumption" label="Gas Consumption">
                                                <Input className="inputBox" type='number' placeholder="Litres"/>
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
                                    </div>
                                </TabPane>

                        <TabPane tab="Waste" key="Waste">
                                    <div>    
                                        <Form
                                            form={form}
                                            onFinish={addEmissions}
                                            name="basicWaste"
                                            layout="vertical"                                    
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
                                                <Input className="inputBox" type='number' placeholder="Tonnes"/>
                                            </Form.Item>

                                            <Form.Item className="addEmissionButton">
                                                <Button type="primary" htmlType="submit">
                                                    Add
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </TabPane>

                        <TabPane tab="Water" key="Water">
                                    <div>    
                                        <Form
                                            form={form}
                                            onFinish={addEmissions}
                                            name="basicWater"
                                            layout="vertical"
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
                                    </div>
                                </TabPane>

                        <TabPane tab="Paper" key="Paper">
                                    <div>
                                        <Form
                                            form={form}
                                            onFinish={addEmissions}
                                            name="basicPaper"
                                            layout="vertical"
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
                                                <Input className="inputBox" type='number' placeholder="Kilograms"/>
                                            </Form.Item>

                                            <Form.Item className="addEmissionButton">
                                                <Button type="primary" htmlType="submit">
                                                    Add
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </TabPane>

                        <TabPane tab="Food & Drink" key="FoodAndDrink">
                                    <div>
                                        <Form
                                            form={form}
                                            onFinish={addEmissions}
                                            name="basicFoodAndDrink"
                                            layout="vertical"
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
                                                <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                            </Form.Item>

                                            <Form.Item className="addEmissionButton">
                                                <Button type="primary" htmlType="submit">
                                                    Add
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </TabPane>

                        <TabPane tab="Events" key="Events">
                                <div>
                                    <Form
                                        form={form}
                                        onFinish={addEmissions}
                                        name="basicEvents"
                                        layout="vertical"
                                        scrollToFirstError
                                    >
                                        <h3>Accommodation</h3>

                                        <Form.Item name="totalAccommodation" label="Total Spent on Accommodation">
                                            <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                        </Form.Item>

                                        <h3>Food & Drink</h3>
                                            
                                        <Form.Item name="totalMeals" label="Total Spent on Meals">
                                            <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                        </Form.Item>

                                        <Form.Item name="totalDrinks" label="Total Spent on Non-Alcoholic Drinks">
                                            <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                        </Form.Item>

                                        <Form.Item name="totalBeer" label="Total Spent on Beer">
                                            <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                        </Form.Item>

                                        <Form.Item name="totalWine" label="Total Spent on Wine">
                                            <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                        </Form.Item>

                                        <Form.Item name="totalSpirits" label="Total Spent on Spirits">
                                            <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                        </Form.Item>
                                            
                                        <h3>Giveaways & Promotional Materials</h3>

                                        <Form.Item name="totalEventProducts" label="Total Spent on Plastic Products">
                                            <Input className="inputBox" type='number' placeholder="$ Amount"/>
                                        </Form.Item>

                                        <Form.Item className="addEmissionButton">
                                            <Button type="primary" htmlType="submit">
                                                Add
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </TabPane> 
                        
                        <Layout>
                            <Content>
                                <Card                    
                                    type="inner"
                                    title="Carbon Report"                    
                                >
                                    
                                </Card>
                            </Content>
                        </Layout>       
                   </Tabs>
            </Card>                                                
        </div>
    );
}

export default Calculator;
