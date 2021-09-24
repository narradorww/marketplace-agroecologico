import { BrowserRouter as Router, Route } from "react-router-dom";

import Cadastro from "./pages/cadastro/index";
import Checkout from "./pages/checkout/index";
import Loja from "./pages/loja/index";
import Sidebar from "./components/sidebar";
import Home from "../src/pages/Home";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/loja/:id" exact component={Loja} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Router>
      <Sidebar/>
    </>
  );
};

export default Routes;
