import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styled from 'styled-components';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <h2>Hello!!!</h2>
        <span>{count}</span>
        <div>
          <Button
            increment
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button
            decrement
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    span {
      font-size: 2rem;
    }
  }
`;

const Button = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => (props.increment ? '#6e85f9' : '#eb5252')};
`;

export default Counter;
