import styled from "styled-components";

const Thing = styled.div`
  color: blue;
  &:hover {
    color: red; // <Thing>요소 중 마우스가 올라간 모든 요소의 글씨는 붉은색
  }
  & ~ & {
    background: tomato; // <Thing>의 형제 요소중 모든 <Thing>의 배경은 토마토색
  }
  & + & {
    background: lime; // <Thing> 바로 다음에 오는 <Thing>의 배경은 라임색
  }
  &.something {
    background: orange; // <Thing>요소 중 클래스명이 ".something"이면 배경을 오랜지색
  }
  .something-else & {
    border: 1px solid; // 클래스명이 ".something-else"인 모든 요소중 자식 요소에 <Thing>이 있으면 테두리 그리기
  }
`;

export default function App() {
  return (
    <div className="App">
      <Thing>Hello world!!!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
    </div>
  );
}
