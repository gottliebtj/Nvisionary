import axios from "axios";

const postShowcaseEvent=(text)=>{
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': '4ebff047-8d3c-4e01-b30b-2c72752a9444'
      }
      var data =  {
        "messageType": "threedwebsite",
        "message": text,
        "json": "{}"
    }
      
      axios.post('https://edsf.itwasaday.net/api/boothEvents', data, {
          headers: headers
        })
        .then((response) => {
            console.log("SUSCCESS")
          //alert("COMPLETE")
        })
        .catch((error) => {
            //alert("B")

        });
} 

export default postShowcaseEvent;


  