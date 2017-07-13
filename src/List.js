import React from 'react';
import Item from './Item';

function List({ data, onClickItem }) {
  return (
    <div>
      {data.map((item, i) => {
        return (
          <Item
            key={i}
            title={item.title}
            status={item.status}
            onClick={() => onClickItem(item.id, i)}
          />
        );
      })}
    </div>
  );
}
export default List;
