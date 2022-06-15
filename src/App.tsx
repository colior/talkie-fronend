import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [show, setShow] = useState(false);

  return (
    <div className="App">
        {show && <div className={'container'}>sadsd</div>}
      <button className={'talkie-button'} onClick={() => {
          setShow(show => !show);
          // @ts-ignore
          window.test();
      }}>resize</button>
    </div>
  );
}

export default App;
