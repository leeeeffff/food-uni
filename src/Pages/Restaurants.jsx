import React from "react";
import { Link } from "react-router-dom";
import { RestaurantList } from "../helpers/RestaurantList";
import "../styles/Restaurants.css"; 


const getCategorizedRestaurants = () => {
    const categories = {
        "This shit bussin": [],
        good: [],
        mid: [],
        "I'll rather eat maccas": [],
    };

    RestaurantList.forEach((restaurant) => {
        categories[restaurant.rating].push(restaurant);
    });

    return categories;
};

const Restaurants = () => {
    const categorizedRestaurants = getCategorizedRestaurants();

    const formatRestaurantNameToURL = (name) => {
        return name.toLowerCase().replace(/ /g, "");
    };

    const getGoogleMapsURL = (name) => {
        const query = `${name} Kingsford`;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    };

    return (
        <div className="restaurants">
            <h1 className="RestaurantsTitle">Restaurants</h1>
            <h5 className= "description">you can press the address to checkout the location, and you can press the name of the restaurant to checkout their webpage</h5>
            {Object.keys(categorizedRestaurants).map((category, index) => (
                <div key={index} className="categorySection">
                    <h2 className="categoryTitle">{category}</h2>
                    <div className="restaurantsList">
                        {categorizedRestaurants[category].map((restaurant, key) => (
                            <div key={key} className="restaurantWrapper">
                                <div className="restaurantItem">
                                    <img src={restaurant.image} alt={restaurant.name} className="restaurantImage" />
                                    <div className="restaurantDetails">
                                        <p className="location">
                                            <a href={getGoogleMapsURL(restaurant.name)} target="_blank" rel="noopener noreferrer">
                                                {restaurant.location}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <h3 className="restaurantName">
                                    <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
                                        {restaurant.name}
                                    </a>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Restaurants;
