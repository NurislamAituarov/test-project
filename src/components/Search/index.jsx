import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchTitle } from '../../Action';
import { SearchSvg } from '../Svg/SearchSvg';

import './Search.scss';

export function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function onChange(e) {
    setValue(e.target.value);
    dispatch(searchTitle(e.target.value));
  }

  return (
    <div className="container__search">
      <div className="search">
        <label htmlFor="search">
          <input onChange={onChange} value={value} type="text" placeholder="Поиск" />
          <SearchSvg />
        </label>
      </div>
    </div>
  );
}
