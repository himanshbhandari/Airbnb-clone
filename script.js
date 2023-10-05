
//input element
const myLocation=document.getElementById("location");
const checkInDate=document.getElementById("check-in");
const  checkOutDate=document.getElementById("check-out");
const guests=document.getElementById("guests");

const searchBtn=document.getElementById("search-icon");


searchBtn.addEventListener("click",()=>{
    if(!myLocation.value || !checkInDate || !checkOutDate ||!guests ){
        alert("fill all the details")
    }
    else{
        console.log("im else conditon");
        // fetchData(myLocation.value,checkInDate.value,checkInDate.value)
        localStorage.setItem("location", myLocation.value);
        localStorage.setItem("checkInDate", checkInDate.value);
        localStorage.setItem("checkOutDate", checkOutDate.value);
        window.location.href="./listing/listing.html";
    }
})




