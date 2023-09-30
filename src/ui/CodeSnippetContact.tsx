import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import styled from 'styled-components';
SyntaxHighlighter.registerLanguage('js', js);

const Wrapper = styled.div`
  font-size: 1.3rem;

  pre {
    background: none !important;
    border-radius: 1.5rem !important;

    code {
      font-family: 'Fira Code', monospace !important;
    }

    @media screen and (max-width: 500px) {
      padding: 0 !important;
      font-size: 1rem;
    }
  }

  span {
    color: #5565e8 !important;
  }

  span[class='token arrow'] {
    color: #c98bdf !important;
  }

  span[class='token']:nth-child(11),
  span[class='token']:nth-child(26),
  span[class='token']:nth-child(33),
  span[class='token']:nth-child(40),
  span[class='token']:nth-child(47),
  span[class='token']:nth-child(56) {
    color: #fea55f !important;
  }

  span[class='token']:nth-child(3),
  span[class='token']:nth-child(16) {
    color: #c98bdf !important;
  }
`;

function CodeSnippetContact({
  name,
  email,
  message,
  date,
}: {
  name: string;
  email: string;
  message: string;
  date: string;
}) {
  const code = `
    const button = document.querySelector('#sendBtn');

    const message = {
    name: "${name}",
    email: "${email}",
    message: "${message}",
    date: "${date}"
    }   

    button.addEventListener('click', () => {
	  form.send(message);
    })
  `;

  return (
    <Wrapper>
      <SyntaxHighlighter language='javascript' style={dracula}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
}

export default CodeSnippetContact;
