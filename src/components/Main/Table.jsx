import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterTitle } from '../../Action';

import { Down } from '../Svg/Down';

export function Table() {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  function onSort() {
    setToggle(!toggle);
    dispatch(filterTitle(toggle));
  }

  return (
    <div className="main__table">
      <div className="colum id">
        <strong>ID</strong>
        <Down />
      </div>
      <div onClick={onSort} className="colum title">
        <strong>Заголовок</strong>
        <Down />
      </div>
      <div className="colum subtitle">
        <strong>Описание</strong>
        <Down />
      </div>
    </div>
  );
}
