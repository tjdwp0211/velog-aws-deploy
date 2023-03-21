import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: clamp(400px, 80%, 864px);
  aspect-ratio: 1 / 1;
  background-color: #55dc55;
  color: white;
  font-size: clamp(1.8rem, 2.5vw, 5.6rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
`;

export { Wrapper, Container };
