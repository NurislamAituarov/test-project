import './Main.scss';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem';
import { Table } from './Table';
import { NavPages } from './Nav';

export function Main() {
  const { listItems } = useSelector((state) => state);

  return (
    <main className="main">
      <Table />
      <Routes>
        <Route path="test-project" element={<ListItem />} />
        <Route path="test-project/:id" element={<ListItem />} />
      </Routes>
      <NavPages />
    </main>
  );
}
