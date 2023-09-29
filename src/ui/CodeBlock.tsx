import CodeBlockHeader from './CodeBlockHeader';
import CodeBlockDescription from './CodeBlockDescription';
import CodeSnippet from './CodeSnippet';

function CodeBlock({ code }: { code?: string }) {
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
      <CodeBlockHeader />
      <CodeSnippet code={code || codeSnippetOne} />
      <CodeBlockDescription />
    </article>
  );
}

export default CodeBlock;
