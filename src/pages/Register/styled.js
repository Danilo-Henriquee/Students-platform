import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    color: black;
  }

  label {
    color: black;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input {
    height: 30px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
  button {
    margin-top: 20px;
  }
`;
