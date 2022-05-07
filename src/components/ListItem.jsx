import React from 'react';
import './component.css';

const ListItem = ({item}) => (
  <div className='listItem-wrap'>
    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt='' />
    <header>
      <h4>{item.media_type==="movie" ? item.original_title : item.original_name}</h4>
      <span>🌟{Math.trunc(item.vote_average/2)}</span>
    </header>
  </div>
);

export default ListItem;