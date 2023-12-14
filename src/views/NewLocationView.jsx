import { useEffect, useState } from "react";

function NewLocationView() {
    const [formData, setFormData] = useState({
        city: "",
        country: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

   return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    City:
                    <input
                        type="text" 
                        name="city"
                        value={formData.city}
                        placeholder="city"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Country:
                    <input
                        type="text" 
                        name="country"
                        value={formData.country}
                        placeholder="country"
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
                <p>{formData.city} - {formData.country}</p>
            </form>
        </>
   )
};

export default NewLocationView;