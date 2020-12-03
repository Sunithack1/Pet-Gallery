import React from 'react';
import SignMeUp from './SignMeUp';
import headerStrings from '../public/strings/header'

export const Header = () => {
  const signupCallback = (email) => {
    return console.log(`sign up called with email ${email}`);
  };

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-8 text-lg-right">
          <h2>{headerStrings.pageHeader}</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};
