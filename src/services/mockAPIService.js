async function getTravelCardList() {
   const response = await fetch("mockAPI/mockAPI.json")
   const result = await response.json()

   return result.data
};

export default {
   getTravelCardList
};