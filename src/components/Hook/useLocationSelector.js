import React,{ useState } from "react"


const useLocationSelector = (continentsData) => {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleContinentChange = (continentId) => {
    setSelectedContinent(continentId);
    setSelectedCountry('');
    setSelectedState('');
    setSelectedCity('');
  }

  const handleCountryChange = (countryId) => {
    setSelectedCountry(countryId);
    setSelectedState('');
    setSelectedCity('');
  }

  const handleStateChange = (stateId) => {
    setSelectedState(stateId);
    setSelectedCity('');
  }

  const handleCityChange = (city) => {
    setSelectedCity(city);
  }

  const selectedContinentData = continentsData.find(c => c.id === parseInt(selectedContinent))
  const selectedCountryData = selectedContinentData?.countries.find(c => c.id === parseInt(selectedCountry))
  const selectedStateData = selectedCountryData?.states.find(s => s.id === parseInt(selectedState))
  const selectedCityData= selectedStateData?.cities.find(c=>c.id === parseInt(selectedCity))

  return {
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
  }
}

export default useLocationSelector
