import React from 'react';
import style from './HomeView.module.css';

const HomeView = () => (
  <div className={style.container}>
    <h1 className={style.title}>
      Welcome! This is our application. Phonebook{' '}
      <span role="img" aria-label="Иконка приветствия">
        📔
      </span>
    </h1>
  </div>
);

export default HomeView;