import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const FoodCard = ({food,addFavorite}) => {
  return (
    <div style={{width:'400px', margin:'20px'}}>
    <Card>
    <CardHeader
    title={food.name}
    subtitle={'calories:'+ food.calories}
    avatar={<IconButton tooltip="Add to Favorites" touch={true} tooltipPosition="bottom-center" iconStyle={{color:'gold'}} onClick={()=>addFavorite(food)}>
              <ActionGrade />
            </IconButton>}
    />
  <CardMedia>
    <img src={food.image} alt="" />
  </CardMedia>
  </Card>
    </div>
  );
};

export default FoodCard