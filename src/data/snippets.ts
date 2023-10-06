export const snippets = [
  {
    id: 1,
    description:
      ' My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.',
    snippet: ` 
    function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
    const value: T = parseModel(chunk._response, chunk._value);
    const initializedChunk: InitializedChunk<T> = (chunk: any);
    initializedChunk._status = INITIALIZED;
    initializedChunk._value = value;
    return value;
    }
    `,
  },
  {
    id: 2,
    description:
      ' My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.',
    snippet: ` 
    function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
    const value: T = parseModel(chunk._response, chunk._value);
    const initializedChunk: InitializedChunk<T> = (chunk: any);
    initializedChunk._status = INITIALIZED;
    initializedChunk._value = value;
    return value;
    }
    `,
  },
  {
    id: 3,
    description:
      ' My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.',
    snippet: ` 
    function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
    const value: T = parseModel(chunk._response, chunk._value);
    const initializedChunk: InitializedChunk<T> = (chunk: any);
    initializedChunk._status = INITIALIZED;
    initializedChunk._value = value;
    return value;
    }
    `,
  },
];
