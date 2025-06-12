import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling"
import RestaurantCard from "./RestaurantCard";

function Body() {

    const restArr = ApiCalling();
    const[allRestaurant, setAllRestaurant] = useState(restArr);
    console.log(allRestaurant, "allRestaurant");

    useEffect(function(){
        if(restArr.length && restArr){
            setAllRestaurant(restArr);
        }
    }, [restArr]);

    function averageRating() {
        const filteredRestaurants = restArr.filter((restaurant) => restaurant.info.avgRating >= 4.5);
        setAllRestaurant(filteredRestaurants);
    }

  return (
    <div className="ml-20 mt-4 ">
       <h1 className="text-2xl my-4 font-bold">Restaurants with online food delivery in Mathura</h1>
       <button className="border rounded-2xl p-2 mx-4" onClick={averageRating}>Ratings 4.5+</button>
       <button className="border rounded-2xl p-2 mx-4" onClick={() => setAllRestaurant(restArr)}>Reset</button>
       <input  className="border rounded-2xl p-2 mx-4" type="text" placeholder="Search Restaurants" />
    
        <div className="mx-auto">
            <RestaurantCard restArr={allRestaurant} />
        </div>
    </div>
  )
}

export default Body