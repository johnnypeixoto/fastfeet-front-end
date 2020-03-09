import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7159c1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  background: #fff;
  border-radius: 4px;

  h1 {
    font-size: 12px;
    margin: 0 0 5px;
  }

  img {
    width: 100%;
    margin-top: 40px;
    padding: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 0 20px 40px 20px;
  }

  input {
    border-radius: 4px;
    border: solid #eee 1px;
    height: 40px;
    margin: 0 0 10px;
    padding: 0 10px;
    color: #333;

    &::placeholder {
      color: #999;
    }
  }

  button {
    height: 40px;
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;
