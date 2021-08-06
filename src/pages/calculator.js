import React, { useState } from 'react';
import { Button, Card , Tabs, Layout } from 'antd';
import './calculator.css';


/* TODO: 
    - create std/adv switch with logic to pass basic or adv content
    - build logic maybe
*/ 

const { Content } = Layout;
const { TabPane } = Tabs;

function Calculator() {
  
  const [emission, setEmissions] = useState({
  
    //transportValues:
    vehicleType: '',
    cabinClass: '',
    airDistance: '',
    transportMethod: '',
    transportType: '',
    pubDistance: '',
        
    //electricityValues:
    consumption: '',
        
    //gasValues:
    lpgConsumption: '',
    gasConsumption: '',
    unitOfMeasurement: '',
    stateOrTerritory: '',
      
    //wasteValues:
    wasteType: '',
    wasteWeight: '',
        
    //waterValues:
    waterUtilityLocation: '',
      
    //paperValues:
    source: '',
    paperType: '',
    paperWeight: '',
        
    //foodAndDrinkValues:
    foodType: '',
    expenditure: '',
        
    //eventsValues:
    totalAccommodation: '',
    totalMeals: '',
    totalDrinks: '',
    totalBeer: '',
    totalWine: '',
    totalSpirits: '',
    totalEventProducts: ''
  });
    
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting emission ${JSON.stringify(emission, null, 2)}`)
}

  function callback(key) {
    console.log(key);
  }

  return (  
    <div className='calculatorContent'>
      <Card
        className="calculatorCard"
        bordered={false} 
        style={{ width: 1300 }} 
        title="Carbon Calculator"
      >
        <Tabs defaultActiveKey="Transport" onChange={callback}>                          

          <TabPane tab="Transport" key="Transport">
            <div>    
              <form className='basicTransportForm' onSubmit={handleSubmit}>

                <h3>Vehicle</h3>

                <label className='calculatorLabel'>Vehicle Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, vehicleType: e.target.value})}
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
                  onChange = {e => setEmissions({ ...emission, cabinClass: e.target.value})}
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
                  onChange = {e => setEmissions({ ...emission, airDistance: e.target.value})}
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
                  onChange = {e => setEmissions({ ...emission, transportMethod: e.target.value})}
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
                  onChange = {e => setEmissions({ ...emission, transportType: e.target.value})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Distance</label>   
                <input
                  value = {emission.pubDistance}
                  onChange = {e => setEmissions({ ...emission, pubDistance: e.target.value})}
                  className='calculatorInput' 
                  type='number' 
                  placeholder='Kilometres'
                />
               
                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>
            
          <TabPane tab="Electricity" key="Electricity">
            <div>    
              <form className='basicElectricityForm'>

                <label className='calculatorLabel'>Consumption</label>
                <input
                  value = {emission.consumption}
                  onChange = {e => setEmissions({ ...emission, consumption: e.target.value})}
                  className='calculatorInput' type='number' placeholder='Kilowatt Hours'
                />
               
                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab="Gas" key="Gas">
            <div>    
              <form className='basicGasForm'>

                <label className='calculatorLabel'>LPG Consumption</label>
                <input
                  value = {emission.lpgConsumption}
                  onChange = {e => setEmissions({ ...emission, lpgConsumption: e.target.value})}
                  className='calculatorInput' type='number' placeholder='Litres'
                />

                <h3>Or</h3>
                
                <label className='calculatorLabel'>Gas Consumption</label>
                <input
                  value = {emission.gasConsumption}
                  onChange = {e => setEmissions({ ...emission, gasConsumption: e.target.value})}
                  className='calculatorInput' type='number' placeholder='Litres'
                />

                <label className='calculatorLabel'>Unit of Measurement</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, unitOfMeasurement: e.target.value})}
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
                  onChange = {e => setEmissions({ ...emission, stateOrTerritory: e.target.value})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab="Waste" key="Waste">
            <div>    
              <form className='basicWasteForm'>
                
                <label className='calculatorLabel'>Waste Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, wasteType: e.target.value})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Weight</label>
                <input
                  value = {emission.wasteWeight}
                  onChange = {e => setEmissions({ ...emission, wasteWeight: e.target.value})}
                  className='calculatorInput' type='number' placeholder='Tonnes'
                />

                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab="Water" key="Water">
            <div>    
              <form className='basicWaterForm'>
                
                <label className='calculatorLabel'>Water Utility Location</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, waterUtilityLocation: e.target.value})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>
          </TabPane>

          <TabPane tab="Paper" key="Paper">
            <div>    
              <form className='basicPaperForm'>
                
                <label className='calculatorLabel'>Source</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, source: e.target.value})}
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
                  onChange = {e => setEmissions({ ...emission, paperType: e.target.value})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Weight</label>
                <input
                  value = {emission.paperWeight}
                  onChange = {e => setEmissions({ ...emission, paperWeight: e.target.value})}
                  className='calculatorInput' type='number' placeholder='Kilograms'
                />

                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>  
          </TabPane>

          <TabPane tab="Food & Drink" key="FoodAndDrink">
            <div>    
              <form className='basicFoodAndDrinkForm'>
                
                <label className='calculatorLabel'>Food Type</label>
                <select
                  required
                  className = 'calculatorDropdown'
                  onChange = {e => setEmissions({ ...emission, foodType: e.target.value})}
                >
                  <option value="" disabled selected hidden>Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label className='calculatorLabel'>Expenditure</label>
                <input
                  value = {emission.expenditure}
                  onChange = {e => setEmissions({ ...emission, expenditure: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />

                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>  
          </TabPane>

          <TabPane tab="Events" key="Events">
            <div>    
              <form className='basicEventsForm'>

                <h3>Accommodation</h3>

                <label className='calculatorLabel'>Total Spent on Accommodation</label>   
                <input
                  value = {emission.totalAccommodation}
                  onChange = {e => setEmissions({ ...emission, totalAccommodation: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />

                <h3>Food & Drink</h3>

                <label className='calculatorLabel'>Total Spent on Meals</label>   
                <input
                  value = {emission.totalMeals}
                  onChange = {e => setEmissions({ ...emission, totalMeals: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />

                <label className='calculatorLabel'>Total Spent on Non-Alcoholic Drinks</label>   
                <input
                  value = {emission.totalDrinks}
                  onChange = {e => setEmissions({ ...emission, totalDrinks: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />
                          
                <label className='calculatorLabel'>Total Spent on Beer</label>   
                <input
                  value = {emission.totalBeer}
                  onChange = {e => setEmissions({ ...emission, totalBeer: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />

                <label className='calculatorLabel'>Total Spent on Wine</label>   
                <input
                  value = {emission.totalWine}
                  onChange = {e => setEmissions({ ...emission, totalWine: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />

                <label className='calculatorLabel'>Total Spent on Spirits</label>   
                <input
                  value = {emission.totalSpirits}
                  onChange = {e => setEmissions({ ...emission, totalSpirits: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />

                <h3>Giveaways & Promotional Materials</h3>

                <label className='calculatorLabel'>Total Spent on Plastic Products</label>   
                <input
                  value = {emission.totalEventProducts}
                  onChange = {e => setEmissions({ ...emission, totalEventProducts: e.target.value})}
                  className='calculatorInput' type='number' placeholder='$ Amount'
                />

                <Button type='primary'>Add</Button>
                                            
              </form>                
            </div>  
          </TabPane> 
                        
          <Layout>
            <Content>
              <Card                    
                type="inner"
                title="Carbon Report"                    
              >
              <h4>Transport:</h4>
              <h5>Vehicle:</h5>
              <h6>Vehicle Type: {emission.vehicleType}</h6>
              <h5>Air Travel:</h5>
              <h6>Cabin Class: {emission.cabinClass}</h6>
              <h6>Distance: {emission.airDistance}</h6>
              <h5>Public Transport:</h5>
              <h6>Transport Method: {emission.transportMethod}</h6>
              <h6>Transport Type: {emission.transportType}</h6>
              <h6>Distance: {emission.pubDistance}</h6>
              <h4>Electricity:</h4>
              <h5>Consumption: {emission.consumption}</h5>
              <h4>Gas:</h4>
              <h4>Waste:</h4>
              <h4>Water:</h4>
              <h4>Paper:</h4>
              <h4>Food & Drink:</h4>
              <h4>Events:</h4>
              <br/><h4>Total:</h4>
              

              </Card>
            </Content>
          </Layout>       
        </Tabs>
      </Card>                                                
    </div>
  );
}

export default Calculator;
