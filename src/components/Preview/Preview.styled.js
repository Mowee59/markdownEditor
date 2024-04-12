import styled from "styled-components";

const PreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const PreviewScrollDiv = styled.div`
  flex-grow: 1;
  overflow: auto;
  padding: 1.6rem;
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: 0.18rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${(props) => props.theme.headingColor};
  }

  h1 {
    font-size: 3.2rem;
    font-weight: bold;
    margin: 3.2rem 0;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 300;
    line-height: 4.2rem;
    margin: 3.2rem 0;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 2.4rem 0;
  }

  h4 {
    font-size: 2rem;
    font-weight: bold;
    margin: 2.4rem 0;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 1.6rem 0;
  }

  h6 {
    font-size: 1.4rem;
    margin: 1.6rem 0;
    font-weight: bold;
    color: ${(props) => props.theme.btnIdle};
  }

  p {
    margin: 2.4rem 0 2.4rem 0;
  }

  ol,
  ul {
    margin: 2.8rem;
  }

  a {
    color: inherit;
  }

  ul {
    list-style: none; /* Remove default bullets */

    li {
      position: relative; /* Create a new positioning context for ::before */
      padding-left: 0.8rem;
      &::before {
        font-weight: bold;
        font-size: larger;
        content: "•"; /* Add bullet */
        position: absolute;
        left: -1em; /* Position bullet before text */
        color: ${(props) => props.theme.btnIdle}; /* Change color of bullet */
      }
    }
  }

  code p {
    color: ${(props) => props.theme.headingColor};
  }

  blockquote p {
    border-radius: 5px;
    background: ${(props) => props.theme.menuBackground};
    color: ${(props) => props.theme.headingColor};
    padding: 3.2rem 2.4rem;
    border-left: 4px solid ${(props) => props.theme.btnIdle};
  }
`;

const ContentPreview = styled.div`
  max-width: 67.2rem;
  margin: 0 auto;
`;

export { PreviewDiv, PreviewScrollDiv, ContentPreview };
