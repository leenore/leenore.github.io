import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Works, Footer, About, Contact, NoMatch } from '.';

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Works />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
