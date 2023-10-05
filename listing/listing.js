const myLocation=localStorage.getItem("location");
const checkInDate=localStorage.getItem("checkInDate");
const checkOutDate=localStorage.getItem("checkOutDate");


const cardContainer=document.getElementsByClassName("lists-container")[0];


//fetch sirbnb api
async function fetchData(location,checkIn,checkOut){
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
        method: 'GET',
        // https://api.example.com/listings?search=${searchInput}
        headers: {
            'X-RapidAPI-Key': '943d0f203cmshc4a6d757997be34p14e836jsnd1195100861a',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.results);
        
        // console.log(result.results[0].rating);
        renderingData(result.results);

    } catch (error) {
        console.log(error);
    }
}

fetchData(myLocation,checkInDate,checkOutDate);



function renderingData(data){
    // console.log(data);
    
    data.forEach((ele ,index)=> {
        console.log(ele);
        const card=document.createElement("div")
        card.innerHTML=`
        <div class="mycard mycard-width d-flex flex p-4">
            <div class="card-img-container">
                <img src="${ele.images[0]}" width="350px" height="240px" alt="img">
            </div>
            <div class="card-body-container d-flex flex-column justify-content-between  ms-4 ">
                <p>${ele.address}</p>
                <h3>${ele.name}</h3>
                <p>${ele.persons} guests · Entire Home · ${ele.bedrooms} beds · ${ele.bathrooms} bath <br> ${ele.previewAmenities[0]} · Kitchen · Free Parking</p>
                <div class="card-body-text d-flex justify-content-between align-items-center">
                    <p>${ele.rating}<i class="fa-solid fa-star" style="color: #edd25a;"></i> (${ele.reviewsCount})</p>
                    <h5>$${ele.price.total}<span>/night</span></h5>
                </div>
            </div>
        </div>
    `     
    cardContainer.appendChild(card);
    });


}