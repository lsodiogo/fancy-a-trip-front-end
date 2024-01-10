async function getCountriesAPIData() {
   const response = await fetch("https://countriesnow.space/api/v0.1/countries");
   const result = await response.json();

   return result.data;
};

export default {
   getCountriesAPIData
};