import LoginPage from "./pages/LoginPage";
import Layout from "./components/UI/Layout";
import HomePage from "./components/Homepage/HomePage";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Product from "./components/Products/Product";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route path="/welcome" exact>
              <HomePage>Welcome on Board.</HomePage>
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            {isLoggedIn && (
              <Route path="/shop">
                <Product />
              </Route>
            )}
            <Route path="*">
              <p>Not found.</p>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default App;
