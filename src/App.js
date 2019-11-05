import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import styles from './App.module.css';
import { Logo, Contacts, Menu, PageTitle, Pagination, Socials, NextPageLink, Sidebar } from './components';
import { PageOne } from './containers';

const initialState = {
  pages: [
    {title: 'Khhhhh'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'},
    {title: 'Добро пожаловать!'}
  ],
  sidebarIsVisible: false
}

export const App = () => {
  const [pages, setPages] = React.useState(initialState.pages);
  const [sidebarIsVisible, setSidebarIsVisible] = React.useState(initialState.sidebarIsVisible);

  const menuClickedHandler = () => {
    setSidebarIsVisible(!sidebarIsVisible);
  };

  return (
    <div className={styles.App}>
      <Menu clicked={menuClickedHandler} />
      <Logo />
      <Contacts />
      <Transition 
        in={sidebarIsVisible}
        timeout={{
          enter: 500,
          exit: 200
        }}
        mountOnEnter
        unmountOnExit >
        {state => (
          <Sidebar show={state} />
        )}
      </Transition>
      <PageTitle />
      <Pagination />
      <Socials />
      <NextPageLink />
      <Switch>
        <Route exact path="/one" component={PageOne} />
        <Route exact path="/two" component={PageOne} /> 
        <Route exact path="/three" component={PageOne} /> 
        <Route exact path="/four" component={PageOne} /> 
        <Route exact path="/five" component={PageOne} /> 
        <Route exact path="/six" component={PageOne} /> 
        <Route exact path="/seven" component={PageOne} />  
      </Switch>
    </div>
  );
}

export default App;
