import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';

const 
  colorPrimary = {
    backgroundColor: '#fff'
  },
  colorWarning = {
     backgroundColor: '#fff'
  },
  removeItem = {
    cursor: 'pointer',
    float:'right'
  };

function Item({ title, status, onClick }) {
  return (
    <Panel style={status === 'done' ? colorPrimary : colorWarning}>
      <Button size="small" color="warning" variant="fab" onClick={onClick}>x</Button>
      {' '}{title}{' '}
    </Panel>
  );
}
export default Item;
