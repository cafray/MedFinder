import { useState, useEffect } from 'react';

import Dock from 'react-dock';
import Product from '../product/list';
import './styles.css';

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Cart (7)</h5>

        <div className="row products">
          <Product/>
        </div>

        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R 43</h3>
          </div>
          <button
           
            className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center"
          >
            Complete Checkout
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
