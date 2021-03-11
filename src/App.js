import React from "react";  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches,
    routes: [
      {
        path: "/sandwiches/pizza",
        component: Pizza
      },
      {
        path: "/sandwiches/burger",
        component: Burger
      }
    ]
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/car",
        component: Car
      }
    ]
  }
];

export default function App() {
  return (
    <Router>
      <div >
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Sandwiches({ routes })  {
  return (
    <div>
      <h2>Sandwiches</h2>
      <ul>
        <li>
          <Link to="/sandwiches/pizza">Pizza</Link>
        </li>
        <li>
          <Link to="/sandwiches/burger">Burger</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );}

function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/car">Car</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Car() {
  return <h3>Car</h3>;
}
function Pizza() {
  return <h3>Pizza</h3>;
}

function Burger() {
  return <h3>Burger</h3>;
}
