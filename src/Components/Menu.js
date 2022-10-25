import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color'

const Menu = (props) => { 
  const update = props.click;

    return (
      <div className="colorOptions">
          <Color color="red" handleClick={update}></Color>
          <Color color="pink" handleClick={update}></Color>
          <Color color="blue" handleClick={update}></Color>
          <Color color="green" handleClick={update}></Color>
      </div>
    );
}

export default Menu;