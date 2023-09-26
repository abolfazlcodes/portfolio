import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
SyntaxHighlighter.registerLanguage('js', js);

interface SingleLineCodeBlockProps {
  code: string;
  language: string;
}

function SingleLineCodeBlock({
  code,
  language,
}: SingleLineCodeBlockProps) {
  return (
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
  );
}

export default SingleLineCodeBlock;
