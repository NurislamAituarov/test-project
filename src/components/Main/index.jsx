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
        <Route path="/" element={<ListItem />} />
        <Route path="/:id" element={<ListItem />} />
      </Routes>
      <NavPages />
    </main>
  );
}
