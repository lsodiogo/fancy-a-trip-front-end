function GetCurrentDate() {
   
   let objectDate = new Date();
   let day = objectDate.getDate();
   let month = objectDate.getMonth()+1;
   let year = objectDate.getFullYear();

   if (day < 10) {
      day = `0${day}`;
   }

   if (month < 10) {
      month = `0${month}`;
   }

  let dateFormat = `${year}-${month}-${day}`;
   
   return (
      <>
        {dateFormat}
      </>
   )
};

export default GetCurrentDate;