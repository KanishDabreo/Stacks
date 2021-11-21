import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

export default function Login(props) {
  return (
    <Container fluid="sm">
      <Form>
        <FloatingLabel controlId="floatingInput" label="username">
        <Form.Control type="name" placeholder="Username" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Confirm Password">
          <Form.Control type="confirmPassword" placeholder="Confirm Password" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}