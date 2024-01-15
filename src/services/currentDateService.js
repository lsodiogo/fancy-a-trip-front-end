function getCurrentDate() { 

   const weekdayArray = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

   let objectDate = new Date();
   let year = objectDate.getFullYear();
   let month = objectDate.getMonth()+1;
   let day = objectDate.getDate();
   let weekday = weekdayArray[objectDate.getDay()]; 

   if (day < 10) {
      day = `0${day}`;
   };

   if (month < 10) {
      month = `0${month}`;
   };

   let dateFormat = `${year}-${month}-${day}, ${weekday}`;

   return dateFormat;
   
};

export default {
   getCurrentDate
};