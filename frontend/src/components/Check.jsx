import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';

function Check() {
  const [items, setItems] = useState([
    { name: 'Golden Retriever', price: 1200, quantity: 1 },
    { name: 'Labrador Retriever', price: 1100, quantity: 1 },
    { name: 'German Shepherd', price: 1300, quantity: 1 }
  ]);

  const [totals, setTotals] = useState({
    oneTime: 3600,
    recurring: 0,
    discount: 0,
    tax: 0,
    total: 3600
  });

  const handleQuantityChange = (index, quantity) => {
    const newItems = [...items];
    newItems[index].quantity = quantity;
    setItems(newItems);
    updateTotals(newItems);
  };

  const updateTotals = (updatedItems) => {
    const subtotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // Example tax calculation
    const total = subtotal + tax;
    setTotals({
      oneTime: subtotal,
      recurring: 0,
      discount: 0,
      tax: tax,
      total: total
    });
  };

  return (
    <Container>
      <h1 className="text-center my-4">Checkout</h1>
      <Row>
        <Col md={8}>
          <h3>Items</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <h3>Totals</h3>
          <Table bordered>
            <tbody>
              <tr>
                <td>One-time charges</td>
                <td>${totals.oneTime.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Recurring charges</td>
                <td>${totals.recurring.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>${totals.discount.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Taxes</td>
                <td>${totals.tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total today</td>
                <td>${totals.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" size="lg" block>
            Proceed to Payment
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Check;