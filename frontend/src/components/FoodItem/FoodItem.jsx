import React, { useContext } from 'react'; 
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image}) => {

  const context = useContext(StoreContext);

  if (!context) {
    console.error("StoreContext is undefined");
    return null; // or a loading state
  }
  
  const { cartItems, addToCart, removeFromCart, url } = context;

console.log("FoodItem props:", { id, name, price, description, image });
console.log("StoreContext values:", { cartItems, url });


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image ? url + "/images/" + image : "/images/placeholder.png"} 
          alt={name || "Food Item"}
          className="food-item-image"/>
        {typeof cartItems?.[id] === 'undefined' ? (
        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt=""/> ):(
         <div className='food-item-counter'>
         <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems?.[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  );
};
        
export default FoodItem;
