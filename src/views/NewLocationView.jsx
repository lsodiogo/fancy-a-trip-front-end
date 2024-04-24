import { useEffect, useState } from "react";

import countriesAPIService from "../services/countriesAPIService";



function NewLocationView() {
    
    const [formData, setFormData] = useState({
        country: "",
        city: "",
        dateFrom: "",
        dateTo: "",
        description: "",
    });

    const [getDataCountry, setGetDataCountry] = useState([]);
    const [getDataCities, setGetDataCities] = useState([]);
    const [fieldsRequired, setFieldsRequired] = useState(false);
    const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

    // GET THE SOONEST DATE TO TRAVEL WHICH DECIDED BY ME IS TOMORROW //
    const getSoonestDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0];



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
        
        setFieldsRequired(false);
        setSuggestionSubmitted(false);
        setFormData(data => ({ ...data, [name]: value }));
    };

    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // CONDITION TO USER ALWAYS ENTER A COUNTRY AND A CITY //
        if (formData.country === "" || formData.city === "") {
            setFieldsRequired(true);
            setSuggestionSubmitted(false);
            return;
        };

        // CONDITION TO CHECKIN DATE BE THE SOONEST WHEN IN BLANK //
        if (!formData.dateFrom) {
            formData.dateFrom = getSoonestDate;
        };

        // CONDITION TO CHECKOUT DATE BE THE SAME AS CHECKIN DATE WHEN IN BLANK //
        if (!formData.dateTo) {
            formData.dateTo = formData.dateFrom;
        };

        // CONDITION WHEN DESCRIPTION IN BLANK //
        if (!formData.description) {
            formData.description = "no description";
        };

        console.log("SUGGESTION ACCEPTED: ", formData);

        // CONDITION TO CLEAN OUTPUT //
        setFieldsRequired(false);
        setSuggestionSubmitted(true);
        setFormData({
            country: "",
            city: "",
            dateFrom: "",
            dateTo: "",
            description: "",
        });
    };


    
    // CONDITION TO CHANGE INPUT BOX COLOR WHEN FIELD IN BLANK //
    const backgroundCountryEmpty = fieldsRequired && formData.country === "" ? "formSuggestionInput backgroundFieldsRequired" : "formSuggestionInput";

    const backgroundCityEmpty = (fieldsRequired && formData.country === "") || (fieldsRequired && formData.city === "" && formData.country) ? "formSuggestionInput backgroundFieldsRequired" : "formSuggestionInput";

   return (
        <>
            <div className="mainContainerSuggestionPage">
                <img className="imageSuggestionPage" src="/images/worldmap.png" alt="world-map-illustration"/>            

            <form
                className="formSuggestion" 
                onSubmit={handleSubmit}
            >
                <fieldset className="formSuggestionFieldset">
                    <h2>Leave your trip suggestion:</h2>
                    
                    <label>
                        Country<span className="obligatory">*</span>
                        <select required
                            className={backgroundCountryEmpty}
                            type="text" 
                            name="country"
                            value={formData.country}
                            onChange={event => {
                                handleChange(event);
                                handleChangeCountry(event);
                            }}
                        >
                            <option>select country</option>
                            {getDataCountry.map((item, index) =>
                                <option key={index}>
                                    {item.country}
                                </option>
                            )}
                        </select>
                    </label>

                    <label>
                        City<span className="obligatory">*</span>
                        <select required
                            className={backgroundCityEmpty}
                            type="text" 
                            name="city"
                            value={formData.city}
                            onChange={event => handleChange(event)}
                        >
                            <option>select city</option>
                            {getDataCities.map((item, index) =>
                                <option key={index}>
                                    {item}
                                </option>
                            )}
                        </select>
                    </label>

                    <label>
                        Check-in
                        <input
                            className="formSuggestionInput"
                            type="date" 
                            name="dateFrom"
                            value={formData.dateFrom}
                            min={getSoonestDate}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label>
                        Check-out
                        <input
                            className="formSuggestionInput"
                            type="date" 
                            name="dateTo"
                            value={formData.dateTo}
                            min={formData.dateFrom}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label>
                        Description
                        <textarea
                            className="formSuggestionInput"
                            type="text" 
                            name="description"
                            value={formData.description}
                            rows="5"
                            cols="25"
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    {fieldsRequired && <div className="fieldsRequired">
                        * fields required!
                    </div>}

                    <div>
                        <button
                            className="formSuggestionSubmit"
                            type="submit"
                            name="submit"
                        >
                            SUBMIT
                        </button>
                    </div>

                    {suggestionSubmitted && <div className="suggestionSubmitted">
                        SUGGESTION SUBMITTED!
                    </div>}
                </fieldset>
            </form>
            </div>
        </>
   );
   
};

export default NewLocationView;