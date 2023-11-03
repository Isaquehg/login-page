import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Include Font Awesome

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h1>Inatel</h1>
        <p>S206 - Software Quality</p>
      </div>
      <div>
        <h1 id='title'>Registration Testing</h1>
      </div>
      <div id='github'>
        <a href="https://github.com/Isaquehg/ui-testing">
            <i className="fa fa-github"></i> GitHub
        </a>
      </div>
    </header>

  );
};

export default Header;
