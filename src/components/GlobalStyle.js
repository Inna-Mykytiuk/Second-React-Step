import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  ${
    '' /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  }
  @font-face {
    font-family: 'Raleway-Bold', sans-serif;
    src: url('../../public/Raleway-Bold.ttf') format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Raleway-Regular', sans-serif;
    src: url('../../public/Raleway-Regular.ttf') format('truetype');
    font-weight: 400;
  }
  ${'' /* background-image: url( '../Background/b1.jpg'); */}
  ${
    '' /* background: url(https://images.unsplash.com/photo-1610422218546-42b7f1f84dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80); */
  }
  background: url(https://images.unsplash.com/photo-1616488312210-d0298a0d1c25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  ${'' /* overflow: hidden; */}


  width: 100%;
  min-height: 100vh;
  letter-spacing: 0.02em;
  font-size: 14px;
  line-height: 1.85;
  overflow-x: hidden;
  margin: 0 auto;
  transition: 1.5s;
  ${'' /* background-color: #9eb7e5; */}

}

main {
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${'' /* min-height: 100vh; */}
}


${
  '' /* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */
}
${
  '' /* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Raleway',
    monospace;
} */
}

body::-webkit-scrollbar {
  appearance: none;
  background: #000;
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 5px;
}
section {
  margin-top: 50px;
}

img {
  display: block;
    ${'' /* width: 100%; */}
    object-fit: cover;
    object-position: center center;
}
`;
