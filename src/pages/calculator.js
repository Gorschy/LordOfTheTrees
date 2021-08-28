import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faLightbulb, faTrashAlt, faBurn, faFile, faUtensils, faIcons, faRoute } from '@fortawesome/free-solid-svg-icons'
import { Button, Card , Tabs, Layout } from 'antd';
import './calculator.css';

const transportIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faRoute} />;
const electricityIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faLightbulb} />;
const gasIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faBurn} />;
const wasteIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faTrashAlt} />;
const waterIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faTint} />;
const paperIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faFile} />;
const foodAndDrinkIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faUtensils} />;
const eventsIcon = <FontAwesomeIcon style={{marginRight: 8}} icon={faIcons} />;


/* TODO: 
    - build logic maybe
    - once client provides calculation/input data handle uom conversion rates
    - add emission section addition part (every time add is clicked emission shown below)
*/ 

const { Content } = Layout;
const { TabPane } = Tabs;

function Calculator() {
  
  const [emission, setEmissions] = useState({
  
    transportTotal: 0,
    vehicleType: 0,
    cabinClass: 0,
    airDistance: 0,
    transportMethod: 0,
    transportType: 0,
    pubDistance: 0,

    // TEST INPUT FOR CALC TYPE -- will implement all once client provides us with calculation data...
    ADVANCED_INPUT: 0,
        
    electricityTotal: 0,
    consumption: 0,
        
    gasTotal: 0,
    lpgConsumption: 0,
    gasConsumption: 0,
    unitOfMeasurement: 0,
    stateOrTerritory: 0,
      
    wasteTotal: 0,
    wasteType: 0,
    wasteWeight: 0,
        
    waterTotal: 0,
    waterUtilityLocation: 0,
      
    paperTotal: 0,
    source: 0,
    paperType: 0,
    paperWeight: 0,
        
    foodAndDrinkTotal: 0,
    foodType: 0,
    expenditure: 0,
        
    eventsTotal: 0,
    totalAccommodation: 0,
    totalMeals: 0,
    totalDrinks: 0,
    totalEventProducts: 0
  });

  /* -- Unit of Measurement Data -- */
  const metric = {
    uom: 'Metric',
    distance: 'Kilometres',
    consumption: 'kW Hours',
    gas: 'Litres',
    waste: 'Tonnes',
    weight: 'Kilograms',
    dollar: 'AUD'
  };

  const imperial = {
    uom: 'Imperial',
    distance: 'Miles',
    consumption: 'hP',
    gas: 'Gallons',
    waste: 'Tons',
    weight: 'Pounds',
    dollar: 'USD'
  };
  
  /* -- Calculator Switch Handlers -- */
  const [uom, setUom] = useState(metric);
  const [advCalc, setAdvCalc] = useState(false);

  const handleUom = (e) => {
    if(e) {
      setUom(imperial);
    }
    else {
      setUom(metric);
    }
  }

  const handleAdvCalc = (e) => {
    if(e) {
      setAdvCalc(true);
    }
    else {
      setAdvCalc(false);
    }
  }
  /* -------------------------------- */

  const totalEmissions = () => {
    return emission.transportTotal + emission.electricityTotal + emission.gasTotal + emission.wasteTotal + emission.waterTotal + emission.paperTotal + emission.foodAndDrinkTotal + emission.eventsTotal;  
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting emission ${JSON.stringify(emission, null, 2)}`);
    
  }

  function callback(key) {
    console.log(key);
  }

  return (  
    <div className='calculatorContent'>
    
      <Card
        className="calculatorCard"
        id='calculatorCard'
        bordered={false} 
        title="Carbon Calculator"
      >
        <Tabs defaultActiveKey="Transport" onChange={callback}>                          

          <TabPane tab={<span>
                          {transportIcon}
                          Transport
                        </span>} key="Transport">
            <div>    
              <form className='basicForm'>

                <h3>Vehicle</h3>

                <label className='calculatorLabel'>Vehicle Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, vehicleType: parseInt(e.target.value), transportTotal: emission.transportTotal + parseInt(e.target.value)})}
                 
                  
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <h3>Air Travel</h3>

                <label className='calculatorLabel'>Cabin Class</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, cabinClass: parseInt(e.target.value), transportTotal: emission.transportTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Distance</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, airDistance: parseInt(e.target.value), transportTotal: emission.transportTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <h3>Public Transport</h3>
                          
                <label className='calculatorLabel'>Transport Method</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, transportMethod: parseInt(e.target.value), transportTotal: emission.transportTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Transport Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, transportType: parseInt(e.target.value), transportTotal: emission.transportTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Distance</label>   
                <input
                  onChange = {e => setEmissions({ ...emission, pubDistance: parseInt(e.target.value), transportTotal: emission.transportTotal + parseInt(e.target.value)})}
                  className='calculatorInput' 
                  type='number' 
                  placeholder={uom.distance}
                />

                { advCalc 
                  ? <div>
                      <label className='calculatorLabel'>Test</label>
                      <input
                        onChange = {e => setEmissions({ ...emission, ADVANCED_INPUT: parseInt(e.target.value), transportTotal: emission.transportTotal + parseInt(e.target.value)})}
                        className='calculatorInput'
                        type='number'
                        placeholder='adv Input'
                      />
                    </div>
                  : null 
                }  
               
                <Button type='primary' className='formButton' onClick={handleSubmit}>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>
            
          <TabPane tab={<span>
                          {electricityIcon}
                          Electricity
                        </span>} key="Electricity">
            <div>    
              <form className='basicForm'>

                <label className='calculatorLabel'>Consumption</label>
                <input
                  onChange = {e => setEmissions({ ...emission, consumption: parseInt(e.target.value), electricityTotal: emission.electricityTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.consumption}
                />
               
                <Button type='primary' className='formButton'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab={<span>
                          {gasIcon}
                          Gas
                        </span>} key="Gas">
            <div>    
              <form className='basicForm'>

                <label className='calculatorLabel'>LPG Consumption</label>
                <input
                  onChange = {e => setEmissions({ ...emission, lpgConsumption: parseInt(e.target.value), gasTotal: emission.gasTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.gas}
                />

                <h4 style={{textAlign: 'center'}}>or</h4>
                
                <label className='calculatorLabel'>Gas Consumption</label>
                <input
                  onChange = {e => setEmissions({ ...emission, gasConsumption: parseInt(e.target.value), gasTotal: emission.gasTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.gas}
                />

                <label className='calculatorLabel'>Unit of Measurement</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, unitOfMeasurement: parseInt(e.target.value), gasTotal: emission.gasTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>State or Territory</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, stateOrTerritory: parseInt(e.target.value), gasTotal: emission.gasTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select> 

                <Button type='primary' className='formButton'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab={<span>
                          {wasteIcon}
                          Waste
                        </span>} key="Waste">
            <div>    
              <form className='basicForm'>
                
                <label className='calculatorLabel'>Waste Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, wasteType: parseInt(e.target.value), wasteTotal: emission.wasteTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Weight</label>
                <input
                  onChange = {e => setEmissions({ ...emission, wasteWeight: parseInt(e.target.value), wasteTotal: emission.wasteTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.waste}
                />

                <Button type='primary' className='formButton'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab={<span>
                          {waterIcon}
                          Water
                        </span>} key="Water">
            <div>    
              <form className='basicForm'>
                
                <label className='calculatorLabel'>Water Utility Location</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, waterUtilityLocation: parseInt(e.target.value), waterTotal: emission.waterTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <Button type='primary' className='formButton'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab={<span>
                          {paperIcon}
                          Paper
                        </span>} key="Paper">
            <div>    
              <form className='basicForm'>
                
                <label className='calculatorLabel'>Source</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, source: parseInt(e.target.value), paperTotal: emission.paperTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                
                <label className='calculatorLabel'>Paper Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, paperType: parseInt(e.target.value), paperTotal: emission.paperTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Weight</label>
                <input
                  onChange = {e => setEmissions({ ...emission, paperWeight: parseInt(e.target.value), paperTotal: emission.paperTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.weight}
                />

                <Button type='primary' className='formButton'>Add</Button>
                                            
              </form>                
            </div>  
          </TabPane>

          <TabPane tab={<span>
                          {foodAndDrinkIcon}
                          Food & Drink
                        </span>} key="FoodAndDrink">
            <div>    
              <form className='basicForm'>
                
                <label className='calculatorLabel'>Food Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, foodType: parseInt(e.target.value), foodAndDrinkTotal: emission.foodAndDrinkTotal + parseInt(e.target.value)})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Expenditure</label>
                <input
                  onChange = {e => setEmissions({ ...emission, expenditure: parseInt(e.target.value), foodAndDrinkTotal: emission.foodAndDrinkTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.dollar}
                />

                <Button type='primary' className='formButton'>Add</Button>
                                            
              </form>                
            </div>  
          </TabPane>

          <TabPane tab={<span>
                          {eventsIcon}
                          Events
                        </span>} key="Events">
            <div>    
              <form className='basicForm'>

                <h3>Accommodation</h3>

                <label className='calculatorLabel'>Total Spent on Accommodation</label>   
                <input
                  onChange = {e => setEmissions({ ...emission, totalAccommodation: parseInt(e.target.value), eventsTotal: emission.eventsTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.dollar}
                />

                <h3>Food & Drink</h3>

                <label className='calculatorLabel'>Total Spent on Meals</label>   
                <input
                  onChange = {e => setEmissions({ ...emission, totalMeals: parseInt(e.target.value), eventsTotal: emission.eventsTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.dollar}
                />

                <label className='calculatorLabel'>Total Spent on Non-Alcoholic Drinks</label>   
                <input
                  onChange = {e => setEmissions({ ...emission, totalDrinks: parseInt(e.target.value), eventsTotal: emission.eventsTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.dollar}
                />
                          
                <h3>Promotional Materials</h3>

                <label className='calculatorLabel'>Total Spent on Plastic Products</label>   
                <input
                  onChange = {e => setEmissions({ ...emission, totalEventProducts: parseInt(e.target.value), eventsTotal: emission.eventsTotal + parseInt(e.target.value)})}
                  className='calculatorInput'
                  type='number'
                  placeholder={uom.dollar}
                />

                <Button type='primary' className='formButton'>Add</Button>
                                            
              </form>                
            </div>  
          </TabPane> 
                        
          <Layout>
            <Content>
              <Card                    
                type="inner"
                title="Carbon Report"                    
              >
                
                <h4 className='outputTags'>Transport: {emission.transportTotal}</h4>
                <h4 className='outputTags'>Electricity: {emission.electricityTotal}</h4>
                <h4 className='outputTags'>Gas: {emission.gasTotal}</h4>
                <h4 className='outputTags'>Waste: {emission.wasteTotal}</h4>
                <h4 className='outputTags'>Water: {emission.waterTotal}</h4>
                <h4 className='outputTags'>Paper: {emission.paperTotal}</h4>
                <h4 className='outputTags'>Food & Drink: {emission.foodAndDrinkTotal}</h4>
                <h4 className='outputTags'>Events: {emission.eventsTotal}</h4>
                <br/>
                <h4 className='outputTotal'>Total: {totalEmissions()}t CO<sub>2</sub></h4>

              </Card>
            </Content>
          </Layout>       
        </Tabs>
      </Card>
      
      <div>
        <div class="switchContainer">
          <label class="switch" for="advBasic">
            <input type="checkbox" id="advBasic" name="advBasic" onClick={(e) => {
              handleAdvCalc(e.target.checked);
            }}/>
            <div class="slider round"></div>  
          </label>
          <span class='switchLabel'>Advanced</span>      
        </div>

        <div class="switchContainer">
          <label class="switch" for="uom">
            <input type="checkbox" id="uom" name="uom" onClick={(e) => {
              handleUom(e.target.checked);
            }}/>
            <div class="slider round"></div>  
          </label>
          <span class='switchLabel'>Imperial</span>      
        </div>
        
      </div>
    </div>
  );
}


export default Calculator;
