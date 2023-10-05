import CodeBlockHeader from './CodeBlockHeader';
import CodeBlockDescription from './CodeBlockDescription';
import CodeSnippet from './CodeSnippet';
import { useState } from 'react';

function CodeBlock({ code }: { code: string }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <article className='my-6'>
      <CodeBlockHeader onDetails={setShowDescription} />
      <CodeSnippet code={code} />
      {showDescription && <CodeBlockDescription />}
    </article>
  );
}

export default CodeBlock;
