import { Container, GlobalStyles } from './GlobalStyles';
import { TodoListProvider } from './contexts/TodoListContext';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <TodoListProvider>
        <Header />
        <TodoList />
      </TodoListProvider>
    </Container>
  );
};

export default App;
