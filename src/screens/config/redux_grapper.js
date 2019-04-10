import React, { PureComponent } from "react";
import { Provider } from "react-redux";

const Grapper = (MyComponent, store) => {
  return () => (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
};
export default Grapper;
