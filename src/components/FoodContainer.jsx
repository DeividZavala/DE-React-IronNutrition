import React, {Component} from 'react';
import {FoodList} from './FoodList';
import TextField from 'material-ui/TextField';


class FoodContainer extends Component{

  state = {
    foods: this.props.foods,
  }

  getFoods = (e = '') => {
    const search = e.target.value
    const allfoods = this.state.foods
      if(search){
        const searchedfoods = allfoods.filter(food=>food.name.toLowerCase().includes(search))
        this.setState({foods:searchedfoods});
      } else {
        this.setState({foods:this.props.foods})
      }
  }

  render(){
    return(
      <div>
        <TextField onChange={this.getFoods} hintText="Buscar alimento" /><br/>
        {this.state.foods.map((f, index) => {
          return <FoodList name={f.name} calories={f.calories} img={f.image} quantity={f.quantity}/>
        })}
      </div>
    );
  }
}

export default FoodContainer;