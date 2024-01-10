import { useEffect, useState } from "react";

import countriesAPIService from "../services/countriesAPIService";

function NewLocationView() {
    
    const [formData, setFormData] = useState({
        country: "",
        city: "",
        dateFrom: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0],
        dateTo: "",
        description: "",
    });

    const [getDataCountry, setGetDataCountry] = useState([]);
    const [getDataCities, setGetDataCities] = useState([]);



   // GET COUNTRY LIST // 
    useEffect(function() {
        (async function() {
            const result = await countriesAPIService.getCountriesAPIData();
           
            setGetDataCountry(result);
        })();
    }, []);



    // GET CITIES LIST OF THE COUNTRY SELECTED // 
    const handleChangeCountry = async (event) => {
        const selectedCountry = event.target.value;

        const result = await countriesAPIService.getCountriesAPIData();
        const foundElement = result.find(obj => {
            return obj.country == selectedCountry;
        });

        setGetDataCities(foundElement.cities);
    };


    
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
        setFormData(data => ({ ...data, [name]: value }));
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.country === "" || formData.city === "") {
            alert("Please fill in both country and city fields.");
            return;
        }

        console.log("SUGGESTION ACCEPTED: ", formData);
    };

   return (
        <>
            <div className="topContainerSuggestionPage">
                <img className="imageSuggestionPage" src="/images/map5.jpeg" alt="worldMap"/>
                <div className="titleSuggestionPage">What trip should we do next?</div>
            </div>
            <form className="formSuggestion" onSubmit={handleSubmit}>
                
                <fieldset className="formSuggestionFieldset">
                    <h2>Leave your trip suggestion:</h2>

                    <label>
                        Country:
                        <select required
                            className="formSuggestionInput"
                            type="text" 
                            name="country"
                            onChange={event => {
                                handleChange(event);
                                handleChangeCountry(event);
                            }}
                        >
                            <option selected disabled>
                                Select country
                            </option>
                            {getDataCountry.map((item, index) =>
                                <option key={index}>
                                    {item.country}
                                </option>
                            )}
                        </select>
                    </label>

                    <label>
                        City:
                        <select required
                            className="formSuggestionInput"
                            type="text" 
                            name="city"
                            onChange={handleChange}
                        >
                            <option selected disabled>
                                Select city
                            </option>
                            {getDataCities.map((item, index) =>
                                <option key={index}>
                                    {item}
                                </option>
                            )}
                        </select>
                    </label>

                    <label>
                        Check-in:
                        <input
                            className="formSuggestionInput"
                            type="date" 
                            name="dateFrom"
                            min={formData.dateFrom}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Check-out:
                        <input
                            className="formSuggestionInput"
                            type="date" 
                            name="dateTo"
                            min={formData.dateFrom}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Description:
                        <textarea
                            className="formSuggestionInput"
                            type="text" 
                            name="description"
                            rows="5"
                            cols="25"
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        <input
                            className="formSuggestionSubmit"
                            type="submit"
                            name="submit"
                            value="SAVE"
                        />
                    </label>
                </fieldset>
            </form>
        </>
   );
   
};

export default NewLocationView;