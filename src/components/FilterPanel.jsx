import React from 'react';
import { categoryList, ratingList } from './constant';
import FilterListToggle from './FilterListToggle';
import SliderProton from './SliderProton';
import SliderProton2 from './SliderProton2';
import './component.css';

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectRating,
  from,
  handlefrom,
  to,
  handleto
}) => (
  <div>
    <div className='input-group'>
      <p className='label'>Category</p>
      <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    <div className='input-group'>
      <p className='label'>Year</p>
      <div className="dropdown">
      <SliderProton value={from} handlefrom={handlefrom} />
      <SliderProton2 value={to} handleto={handleto} />
      </div>
    </div>
    <div className='input-group'>
      <p className='label'>Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;