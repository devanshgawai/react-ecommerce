import styled from "styled-components";
const Button = styled.button`
  &[type="submit"] {
    color: white;
    background: var(--usafa-blue);
    padding: 0.5rem 4rem;
    border-radius: 10px;
    cursor: pointer;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    transition: all 0.3s linear;
    display: block;
    width: 100%;
    margin: 0.25rem auto;
  }
  &:hover {
    background: var(--usafa-blue);
  }
`;
export default Button;
