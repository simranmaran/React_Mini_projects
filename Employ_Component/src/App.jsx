// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from './LayoutPage';
import EmployeeTable from './Component/EmployeeTable';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path='employee' element={<EmployeeTable />} />
          {/* You can create Insert.jsx, Update.jsx and link here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
