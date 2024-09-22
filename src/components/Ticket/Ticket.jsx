import React,{useState} from 'react'
import datas from '../../datas'


import './Ticket.css'
export default function Ticket() {
 
    const [locationDatas,setLocationDatas]=useState(datas.continents)

    const [selectedContinent, setSelectedContinent] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');


    const handleContinentChange = (e) => {
        setSelectedContinent(e.target.value);
        setSelectedCountry('');
        setSelectedState('');
        setSelectedCity('');
      };

      const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState('');
        setSelectedCity('');
      };
      const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
      };

      const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
      };

      const handleSubmit = () => {
        const selectedInfo = {
          id:1,
          continent: selectedContinentData?.name,
          country: selectedCountryData?.name,
          state: selectedStateData?.name,
          city: selectedCityData.name,
        };
    
        console.log(selectedInfo);
      };

      const selectedContinentData = locationDatas.find(c => c.id === parseInt(selectedContinent));
      const selectedCountryData = selectedContinentData?.countries.find(c => c.id === parseInt(selectedCountry));
      const selectedStateData = selectedCountryData?.states.find(s => s.id === parseInt(selectedState));
      const selectedCityData= selectedStateData?.cities.find(c=>c.id === parseInt(selectedCity))
  return (
    <>



      <div className='container'>
        <h1>Choose your destination</h1>
        { 
         <div className='select-container'>
          <label htmlFor="continent">Continent</label>
      <select onChange={handleContinentChange} value={selectedContinent} id="continent">
      <option value="">Select Continent</option>
         {
          locationDatas.map((continent) => (
            <option key={continent.id} value={continent.id}>{continent.name}</option>
          ))  
         }
      </select>        
        </div>
        
        }
     
 {
    selectedContinent && (
               <div className='select-container'>
            <label htmlFor="country">Country</label>
      <select onChange={handleCountryChange} value={selectedCountry} id="country">
      <option value="">Select Country</option>
         {
          selectedContinentData?.countries.map((country) => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))  
         }
      </select>        
        </div> 
    )
 }


{
    selectedCountry && (
               <div className='select-container'>
            <label htmlFor="country">State</label>
      <select onChange={handleStateChange} value={selectedState} id="country">
      <option value="">Select State</option>
         {
          selectedCountryData?.states.map((state) => (
            <option key={state.id} value={state.id}>{state.name}</option>
          ))  
         }
      </select>        
        </div> 
    )
 }
{selectedState && (
      <div className='select-container'>
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select City</option>
          {selectedStateData?.cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        </div> 
      )}
        

        <button className='btn' onClick={handleSubmit}>Submit</button>
    
 
    </div>
    </>
  )
}
