import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function RestaurantDetails() {
    let { id } = useParams();
    let API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`

    const [restInfo, setRestInfo] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function calling(){
            let restInfo =  await axios.get(API);
            const menuCards = restInfo.data?.data?.cards?.find(card => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
            let allItems = [];
            menuCards.forEach(card => {
                if(card.card?.card?.itemCards) {
                    allItems = allItems.concat(card.card.card.itemCards);
                }
            });
            setRestInfo(allItems);
            setLoading(false);
        }
        calling();
    },[id]);

    if (loading) return <div className="ml-20 mt-4">Loading...</div>;

    return (
    <div className="ml-20 mt-4">
      <h1 className="text-3xl my-6 font-extrabold text-orange-600">Restaurant Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12">
        {restInfo.length === 0 ? <div className="col-span-full text-lg text-gray-500">No menu found.</div> : restInfo.map((item) => (
            <div key={item.card.info.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col items-center border border-orange-100">
              <img
                className="w-40 h-40 object-cover rounded-xl mb-4 border border-gray-200"
                src={item.card.info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${item.card.info.imageId}` : 'https://via.placeholder.com/150'}
                alt={item.card.info.name}
              />
              <h2 className="font-bold text-lg text-center mb-2 text-gray-800">{item.card.info.name}</h2>
              <span className="text-orange-600 font-semibold text-md mb-1">{item.card.info.price ? `₹${item.card.info.price/100}` : 'Price N/A'}</span>
              <span className="text-xs text-gray-500 mb-1">{item.card.info.category}</span>
              <p className="text-gray-600 text-sm mb-2 text-center">{item.card.info.description}</p>
              <div className="flex gap-2 mt-auto">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">{item.card.info.ratings?.aggregatedRating?.rating || 'N/A'} ★</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{item.card.info.isVeg ? 'Veg' : 'Non-Veg'}</span>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantDetails
