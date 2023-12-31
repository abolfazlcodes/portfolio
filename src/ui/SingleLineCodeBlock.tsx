import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
SyntaxHighlighter.registerLanguage('js', js);
import styled from 'styled-components';

interface SingleLineCodeBlockProps {
  code: string;
  language: string;
}

const Wrapper = styled.div`
  pre {
    background: none !important;
    border: none !important;
  }

  span[class='token']:first-child {
    color: #4d5bce !important;
  }

  code span {
    color: #43d9ad;
  }

  span[class='token']:last-child {
    color: #e99287 !important;
  }

  font-size: 1.4rem;
  margin-top: 0;
`;

function SingleLineCodeBlock({
  code,
  language,
}: SingleLineCodeBlockProps) {
  return (
    <Wrapper>
      <SyntaxHighlighter
        language={language}
        customStyle={{
          padding: '0',
          marginTop: '0',
          fontWeight: '500',
        }}
        style={dracula}
      >
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
}

export default SingleLineCodeBlock;
