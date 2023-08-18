import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {COURSE_PATH, HOME_PATH} from 'routes/constants';
import {HomePage} from 'pages/HomePage/HomePage';
import {CoursePage} from 'pages/CoursePage/CoursePage';


export const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path={COURSE_PATH}
        element={<CoursePage/>}/>
      <Route path={HOME_PATH} element={<HomePage/>}/>
    </Routes>
  );
};
