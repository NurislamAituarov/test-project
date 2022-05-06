import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPage } from '../../Action';

export function ListItem() {
  const listItems = useSelector((state) => state.filterItems);
  const [list, setList] = useState([]);
  const pageNum = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPage(pageNum.id));
  }, []);

  useEffect(() => {
    if (!pageNum.id || pageNum.id == 0) {
      setList(listItems.slice(0, 10));
    } else {
      setList(listItems.slice(pageNum.id + '0' - 10, pageNum.id + '0'));
    }
  }, [pageNum]);

  return (
    <>
      {list.map((item, i) => {
        return (
          <div className="main__list" key={item.id}>
            <div className="main__list-item main__list-id">
              <span>{item.id}</span>
            </div>
            <div className="main__list-item main__list-title">
              <p>{item.title}</p>
            </div>
            <div className="main__list-item main__list-subtitle">
              <p>
                rem laborum officia veritatis temporibus quibusdam, quasi recusandae, ea voluptate
                dict obcaecati illum excepturi velit esta minima sunt.
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
