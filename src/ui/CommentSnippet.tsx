import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import styled from 'styled-components';
SyntaxHighlighter.registerLanguage('js', js);

interface CommentSnippetProps {
  comment: string;
  language: string;
  showLineNumbers?: boolean;
}

const Wrapper = styled.div`
  pre {
    background: none !important;
    border: none !important;
    width: 100%;
    padding: 0 !important;

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }

  span[class='token'] {
    color: #607b96 !important;
  }

  code span {
    padding-right: 0 !important;
    text-align: left !important;
  }

  font-size: 1.4rem;
  margin-top: 0;
`;

function CommentSnippet({
  comment,
  language,
  showLineNumbers = false,
}: CommentSnippetProps) {
  return (
    <Wrapper>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers={showLineNumbers}
      >
        {comment}
      </SyntaxHighlighter>
    </Wrapper>
  );
}

export default CommentSnippet;
