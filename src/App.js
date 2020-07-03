import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import './App.css';
import dummyData from './data';
import CardList from './components/CardList';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [theme, setTheme] = useState('light');

  // TODO create theme toggler component
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
        <div className='App'>
          <button onClick={themeToggler}>Switch Theme</button>
          {videos.map((list, index) => {
            return (
              <section key={index}>
                <h2 className='section-title'>{list.section}</h2>
                <CardList list={list} />
                <hr />
              </section>
            );
          })}
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
