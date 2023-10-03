import CodeBlockHeader from './CodeBlockHeader';
import CodeBlockDescription from './CodeBlockDescription';
import CodeSnippet from './CodeSnippet';
import { useState } from 'react';

function CodeBlock({ code }: { code?: string }) {
  const [showDescription, setShowDescription] = useState(false);

  const codeSnippetOne = `
    function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
    const value: T = parseModel(chunk._response, chunk._value);
    const initializedChunk: InitializedChunk<T> = (chunk: any);
    initializedChunk._status = INITIALIZED;
    initializedChunk._value = value;
    return value;
    }
  `;

  return (
    <article className='my-6'>
      <CodeBlockHeader onDetails={setShowDescription} />
      <CodeSnippet code={code || codeSnippetOne} />
      {showDescription && <CodeBlockDescription />}
    </article>
  );
}

export default CodeBlock;
