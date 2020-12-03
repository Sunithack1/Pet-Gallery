import React, { Component } from 'react';
import Link from 'next/link';
import menuStrings from '../public/strings/menu'

export class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">{menuStrings.home}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pets">
                <a className="nav-link">{menuStrings.pets}</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
