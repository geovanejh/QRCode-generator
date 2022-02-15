import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-200);
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  background-color: var(--dark);
  padding: 10vh;
  border-radius: 7px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin-bottom: 4vh;
        color: #0275d8
    }
    input {
        margin-bottom: 1vh;
        width: 100%;
    }

    img {
        margin-top: 5vh;
        border-left: 4px solid #0275d8;
        border-radius: 5px;
    }
`;
