import React from 'react';
import { Header } from '../src/Header';
import { Menu } from '../src/Menu';
import homeStrings from '../public/strings/home';
import menuStrings from '../public/strings/menu';

function index() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>{menuStrings.home}</h2>
            <h6 className="margintopbottom20">
              {homeStrings.homeDescription}              
            </h6>
            <ul>
              <li>{homeStrings.option._1}</li>
              <li>{homeStrings.option._2}</li>
              <li>{homeStrings.option._3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
