import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function NewsLetters() {
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail(''); // Clear the email input after submission
  };

  return (
    <div style={{ backgroundColor: '#f89f95', padding: '2em' }}>
      <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '1em' }}>Subscribe to Our Newsletter</h2>
      <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <Form.Group controlId="formBasicEmail" className="mb-0">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ maxWidth: '300px', borderRadius: '25px 0 0 25px' }}
            required
          />
        </Form.Group>
        <Button variant="danger" type="submit" style={{ borderRadius: '0 25px 25px 0' }}>
          Subscribe
        </Button>
      </Form>
    </div>
  );
}

export default NewsLetters