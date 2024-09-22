import React,{useState} from 'react'
import datas from '../../datas'
import Selector from '../Selector/Selector'
import useLocationSelector from '../Hook/useLocationSelector'


import './Ticket.css'
export default function Ticket(){

    const [continentsData,setContinentsData]=useState(datas.continentsData)

    const {
        selectedContinent,
        selectedCountry,
        selectedState,
        selectedCity,
        selectedContinentData,
        selectedCountryData,
        selectedStateData,
        selectedCityData,
        handleContinentChange,
        handleCountryChange,
        handleStateChange,
        handleCityChange,
      } = useLocationSelector(continentsData);

    const handleSubmit = () => {
        const selectedInfo = {
          id:1,
          continent: selectedContinentData?.name,
          country: selectedCountryData?.name,
          state: selectedStateData?.name,
          city: selectedCityData.name,
        }
        console.log(selectedInfo);
    }

    return (
        <>
              <div className='container'>
              <h1>Choose your destination</h1>
       <Selector
                label="Continent"
                options={continentsData}
                selectedValue={selectedContinent}
                onChange={handleContinentChange}
       />
     {selectedContinent && (
        <Selector
          label="Country"
          options={selectedContinentData?.countries || []}
          selectedValue={selectedCountry}
          onChange={handleCountryChange}
        />
      )}

     {selectedCountry && (
        <Selector
          label="State"
          options={selectedCountryData?.states || []}
          selectedValue={selectedState}
          onChange={handleStateChange}
        />
      )}

     {selectedState && (
        <Selector
          label="City"
          options={selectedStateData?.cities || []}
          selectedValue={selectedCity}
          onChange={handleCityChange}
        />
      )}

           <button className='btn' onClick={handleSubmit}>Submit</button>
        </div>
        </>

    )
}
