import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export function NavPages() {
  const { pageActive, filterItems } = useSelector((state) => state);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(pages);

  useEffect(() => {
    if (!pageActive) {
      setPage(1);
    } else {
      setPage((page) => (page = pageActive));
    }
  }, [pageActive]);

  function onNext() {
    setPage((page) => +page + 1);
    const num = Math.ceil(filterItems.length / 10);
    const newArr = pages.slice(0, num);
    setTotalPages(newArr);
  }

  function onPrev() {
    if (page <= 1) {
      setPage(1);
    }
    setPage((page) => page - 1);
  }

  return (
    <div className="main__nav">
      <NavLink
        className={cn({ 'active-page': page == 1 })}
        to={`test-project/${page - 1}`}
        onClick={() => page >= 2 && onPrev()}>
        <p>Назад</p>
      </NavLink>
      <div className="main__nav-page">
        {totalPages.slice(page - 1, +page + 4).map((el, i) => {
          return (
            <span className={cn({ _active: page == el })} key={i}>
              {el}
            </span>
          );
        })}
      </div>
      <NavLink
        className={cn({ 'active-page': page == totalPages.length })}
        to={`test-project/${+page + 1}`}
        onClick={onNext}>
        <p>Далее</p>
      </NavLink>
    </div>
  );
}
