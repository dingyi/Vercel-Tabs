import styled from "styled-components";
import Tabs from "./Tabs";

export default function App() {
  return (
    <Wrapper>
      <Tabs />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
`;
