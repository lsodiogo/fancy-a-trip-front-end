import { useEffect, useState } from "react";
import countriesAPIService from "../services/countriesAPIService";

function NewLocationView() {
    const [formData, setFormData] = useState({
        country: "",
        city: "",
        dateFrom: Date,
        dateTo: Date,
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormData(
            (data) => ({ ...data, [name]: value })
        );
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };



    const [getDataCountry, setgetDataCountry] = useState([])
    useEffect(function() {
        (async function() {
           const result = await countriesAPIService.getCountry()
           
           setgetDataCountry(result)
        })()
    }, [])

   return (
        <>
            <h1 className="titleSuggestionPage">What trip should I do next?</h1>
            <form className="formSuggestion" onSubmit={handleSubmit}>
                

                <fieldset className="formSuggestionFieldset">
                    <h2>Your trip suggestion:</h2>

                    <label>
                        Country:
                        <select required
                            className="formSuggestionInput"
                            type="text" 
                            name="country"
                            onChange={handleChange}>
                            <option selected disabled>Select country</option>
                            {getDataCountry.map(item =>
                                <option key={item.country}>{item.country}</option>
                            )}
                        </select>
                    </label>

                    <label>
                        City:
                        <input required
                            className="formSuggestionInput"
                            type="text" 
                            name="city"
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        From:
                        <input
                            className="formSuggestionInput"
                            type="date" 
                            name="dateFrom"
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        To:
                        <input
                            className="formSuggestionInput"
                            type="date" 
                            name="dateTo"
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Description:
                        <textarea
                            className="formSuggestionInput"
                            rows="5"
                            cols="25"
                            type="text" 
                            name="description"
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
   )
};

export default NewLocationView;