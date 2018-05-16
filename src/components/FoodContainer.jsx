import React, { Component } from 'react';
import FoodList from "./FoodList";
import InputDisplay from "./InputDisplay";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import StarRate from 'material-ui/svg-icons/toggle/star'

class FoodContainer extends Component {
  state = {
    foods:[],
    open: false,
    newfood:{
      name:String,
      calories:Number
    },
    favoriteFoods: [],
    showFavorites: false,
    displayFoods: []
  }

  showFavorites = () => {
    if(this.state.showFavorites){
      this.setState({showFavorites:false, displayFoods:this.state.foods})
    }else{
      this.setState({showFavorites:true, displayFoods:this.state.favoriteFoods})
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  createFood = () => {
    this.addFood
    this.pushFood()
    this.handleClose()
  }

  addFood = (e) => {
    const value = e.target.value
    const field = e.target.name
    const newfood = this.state.newfood
    newfood[field] = value
    this.setState({newfood})
  }

  pushFood = () => {
    this.state.foods.unshift(this.state.newfood)
    const foods=this.state.foods
    this.setState({foods})
  }

  componentWillMount(){
    const foods = this.props.foods
    this.setState({foods, displayFoods:foods})
  }

  getFoods = (e = '') =>{
    const search = e.target.value
    const allfoods = this.state.foods
    const favfoods = this.state.favoriteFoods
    if(this.state.showFavorites){
      const searchedfoods = favfoods.filter(food=>food.name.toLowerCase().includes(search))
      this.setState({displayFoods:searchedfoods});
    }else{
      const searchedfoods = allfoods.filter(food=>food.name.toLowerCase().includes(search))
      this.setState({displayFoods:searchedfoods});

    }}
    
    
    

  addFavorite = (food) => {
    this.state.favoriteFoods.push(food)
  }



  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.createFood}
      />,
    ];
    return (
      <div>
        <InputDisplay onChange={this.getFoods}/>
        <FoodList foods={this.state.displayFoods} addFavorite={this.addFavorite}/>
        <FloatingActionButton style={{position:'fixed',top:'90%',right:'2%'}} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton style={{position:'fixed',top:'90%',left:'2%'}} onClick={this.showFavorites}>
         <StarRate/>
        </FloatingActionButton>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            name='name'
            floatingLabelText="Food Name"
            onChange={this.addFood}
          /><br />
          <TextField
            name='calories'
            type='number'
            floatingLabelText="Number of Calories"
            onChange={this.addFood}
          /><br />
        </Dialog>
      </div>
    );
  }
}

export default FoodContainer;