import styled from 'styled-components';
import { Container as ContainerMUI } from '@material-ui/core';

import Background from '../../assets/workflow-bg.svg';

export const Container = styled.div`
  height: 100vh;
  background: url(${Background});
  background-size: contain;

  display: flex;
  align-items: stretch;
`;

export const Wrapper = styled(ContainerMUI)`
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    margin-top: 120px;
    background: #fff;
    border-radius: 8px;
    padding: 30px 30px 60px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.08);

    p {
      margin-bottom: 10px;
    }
  }

  button {
    margin-top: 8px;
  }
`;
