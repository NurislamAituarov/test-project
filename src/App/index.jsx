import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Search } from '../components/Search';
import { Main } from '../components/Main';
import { addListItems } from '../Action';

import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addListItems());
  }, []);

  return (
    <div className="wrapper">
      <Search />
      <Main />
    </div>
  );
}

export default App;
