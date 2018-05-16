import React from 'react';
import FoodCard from './FoodCard'

const FoodList = ({foods, addFavorite}) => {
  return (
    <section style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {foods.map((food,index)=>{
        return <FoodCard key={index} food={food} addFavorite={addFavorite}/>
      })}
    </section>
  );
};

export default FoodList;