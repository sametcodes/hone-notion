import { Editor, Layout } from './components';
import { IConfig } from './config';

const config: IConfig = {
  nodes: [
    { description: 'paragraph', node: 'p' },
    { description: 'heading', node: 'h1' },
    { description: 'heading', node: 'h2' },
    { description: 'heading', node: 'h3' },
    { description: 'heading', node: 'h4' },
    { description: 'heading', node: 'h5' },
    { description: 'heading', node: 'h6' }
  ]
}

function App() {
  return (
    <Layout>
      <Editor config={config} />
    </Layout>
  );
}

export default App;
