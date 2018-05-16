import React from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 500,
    height: 450,
    overflowY: 'auto',
    marginLeft: 450,
    marginTop: 100,
    paddingBottom: 50
  }
};

export const FoodList = ({name, calories, img}) => {

  return(
    <div style={styles.root}>

        <GridTile
          key={img}
          title={name}
          subtitle={<span><b>{calories}</b> Calories</span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={img} alt={name} />
        </GridTile>
    </div>
  );
}