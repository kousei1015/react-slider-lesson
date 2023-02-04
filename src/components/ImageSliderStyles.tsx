import styled, { keyframes } from "styled-components";

export const SlideShowAnimatiion = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1s;
  }
`;

export const Image = styled.img<{ active: boolean }>`
display: block;
  animation: ${(props) => (props.active ? SlideShowAnimatiion  : null)};
  animation-duration: 1s;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Arrow = styled.div`
  font-size: 3rem;
  cursor: pointer;
`;
export const Dot = styled.span<{ active: boolean }>`
  width: 8px;
  height: 8px;
  margin: 0 10px;
  color: ${(props) => (props.active ? "gray" : "white")};
`;