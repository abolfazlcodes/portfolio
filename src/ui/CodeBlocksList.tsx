import CodeBlock from './CodeBlock';

function CodeBlocksList() {
  const codeSnippetTwo = `
    export function parseModelTuple(
    response: Response,
    value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
    ): any {
    const tuple: [mixed, mixed, mixed, mixed] = (value: any);
  `;

  return (
    <div className='px-0 md:px-6'>
      <CodeBlock />
      <CodeBlock code={codeSnippetTwo} />
    </div>
  );
}

export default CodeBlocksList;
