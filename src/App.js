import React from 'react';
import styles from './App.module.css';
import { Logo, Contacts, Menu, PageTitle, Pagination, Socials, NextPageLink } from './components';
import { PageOne } from './containers';

export const App = () => {
  return (
    <div className={styles.App}>
      <Menu />
      <Logo />
      <Contacts />
      <PageTitle />
      <Pagination />
      <Socials />
      <NextPageLink />
      <PageOne />
    </div>
  );
}

export default App;
