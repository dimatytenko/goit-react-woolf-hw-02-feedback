import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
  background-color: ${props => props.theme.backgrounds.primary};
`;
