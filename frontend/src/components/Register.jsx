import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

export default function Register(props) {
  return (
    <Container className='register' fluid="sm">
      <Form>
        <FloatingLabel controlId="floatingInput" label="Name">
        <Form.Control type="Name" placeholder="Name" />
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