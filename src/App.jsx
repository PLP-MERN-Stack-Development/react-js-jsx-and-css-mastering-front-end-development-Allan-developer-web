import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Button from './components/Button';
import Card from './components/Card';
import ApiData from './components/ApiData';

function App() {
  const [count, setCount] = useState(0);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tasks', label: 'Tasks' },
    { href: '/about', label: 'About' },
  ];

  const footerLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <Layout brand="Task Manager" navLinks={navLinks} footerLinks={footerLinks}>
      <Card title="Counter Example" className="mb-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 my-4">
            <Button variant="danger" onClick={() => setCount((count) => count - 1)}>
              -
            </Button>
            <span className="text-xl font-bold">{count}</span>
            <Button variant="primary" onClick={() => setCount((count) => count + 1)}>
              +
            </Button>
          </div>
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
      </Card>

      <Card title="Button Variants" className="mb-8">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="primary" disabled>Disabled Button</Button>
        </div>
      </Card>

      <Card title="API Data Example">
        <p className="text-gray-600">
          This section will be updated with API data integration.
        </p>
      </Card>
      <ApiData />
    </Layout>
  );
}

export default App;