import { Container, defaultTheme, GlobalStyles } from './GlobalStyles';
import { TodoListProvider } from './contexts/TodoListContext';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyles />
        <TodoListProvider>
          <Header />
          <TodoList />
        </TodoListProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
