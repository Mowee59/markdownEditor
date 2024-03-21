import styled from "styled-components";

const PreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PreviewScrollDiv = styled.div`
  
  flex-grow: 1;
  overflow: auto;
  padding: 1.6rem;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: 0.2rem;

  & h1 {
    font-size: 3.2rem;
    font-weight: bold;
    margin: 3.6rem 0 3.6rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: bold;
  }

  h6 {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.btnIdle};
  }
`;

export {PreviewDiv, PreviewScrollDiv};