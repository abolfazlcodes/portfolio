import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import styled from 'styled-components';
SyntaxHighlighter.registerLanguage('js', js);

const Wrapper = styled.div`
  font-size: 1.3rem;

  pre {
    border-radius: 1.5rem !important;
    border: 1px solid #1e2d3d !important;
    background: #011221 !important;

    code {
      font-family: 'Fira Code', monospace !important;
    }

    @media screen and (max-width: 500px) {
      padding: 0 !important;
      font-size: 1rem;
    }
  }

  span {
    color: #607b96 !important;
  }

  code span[class='token property-access'] {
    color: #5565e8 !important;
  }

  code span[class='token parameter maybe-class-name'] {
    color: #e99287 !important;
  }

  code span[class='token module'] {
    color: #e99287 !important;
  }

  code span[class='token control-flow'] {
    color: #e99287 !important;
  }

  code span[class='token']:nth-child(3),
  code span[class='token']:nth-child(25),
  code span[class='token']:nth-child(26) {
    color: #e99287 !important;
  }

  code span:nth-child(5),
  code span:nth-child(7),
  code span:nth-child(49),
  code span:nth-child(51) {
    color: #5565e8 !important;
  }
  code span[class='token']:nth-child(6) {
    color: #43d9ad !important;
  }

  code span:nth-child(30),
  code span:nth-child(29) {
    color: #c98bdf !important;
  }
`;

function CodeSnippet({ code }: { code: string }) {
  return (
    <Wrapper>
      <SyntaxHighlighter language='javascript' style={dracula}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
}

export default CodeSnippet;
