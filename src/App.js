import {
  Container,
  defaultTheme,
  darkTheme,
  GlobalStyles,
} from './GlobalStyles';
import { TodoListProvider } from './contexts/TodoListContext';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('default');

  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
      <Container>
        <GlobalStyles />
        <TodoListProvider>
          <Header theme={theme} setTheme={setTheme} />
          <TodoList />
        </TodoListProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
