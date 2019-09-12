import React from 'react';
import Sidebar from './containers/Sidebar';
import Main from './containers/Main';
import Topbar from './containers/Topbar';
import Signin from './containers/Signin/';



function App() {
  return (
    <div className="App">
      <Signin />
      {/* <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div> */}
    </div>
  );
}

export default App;
