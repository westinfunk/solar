import React from 'react';
import Sidebar from './containers/Sidebar';
import Main from './containers/Main';
import Topbar from './containers/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
