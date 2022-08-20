import React from 'react';
import Card from "./Card";
import Netflix from './Netflix';
import Amazon from './Amazon';
import Sdata from "./Scard";

const favSeries = 'Netflix';
const App = () => (
 <>
  <h1 className="heading_style"> List of top recommendations on Netflix </h1>
  {favSeries==="Netflix"?<Netflix />:<Amazon />}
 </>
);

export default App;
