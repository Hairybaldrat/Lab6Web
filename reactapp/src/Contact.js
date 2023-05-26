import './Contact.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      console.log('Something is empty');
      return;
    }

    var discordMessage = {
      username: 'Portfolio bot',
      content: 'New Message',
      embeds: [
        {
          fields: [
            { name: 'Username', value: name },
            { name: 'Email', value: email },
            { name: 'Message', value: message },
          ],
        },
      ],
    };
    try {
      fetch(process.env.REACT_APP_DISCORD_HOOK, {
        body: JSON.stringify(discordMessage),
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      window.alert("Message sent! Thank you.")
    }
    catch (e) {
      alert(e);
    }
  }

  return (<div className="Section reveal" id="Contact">
    <Container className="Contactbox mt-4">
      <Form onSubmit={handleSubmit}>
        <Container fluid>
          <Row>
            <h1 className="contactTitle border-bottom pb-4"> Contact Us </h1>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label htmlFor="inputName" className="mt-4">Name :</Form.Label>
              <Form.Control
                type="text"
                id="inputName"
                aria-describedby="nameHelp"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                maxLength={200}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="">
              <Form.Label htmlFor="inputEmail">Email :</Form.Label>
              <Form.Control
                type="text"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                maxLength={200}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputMessage" >Message :</Form.Label>
              <Form.Control
                type="text"
                id="inputMessage"
                aria-describedby="messageHelp"
                as="textarea"
                rows={4}
                placeholder="Your Message"
                onChange={(e) => setMessage(e.target.value)}
                maxLength={200}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={2} md={2} style={{ display: "table", padding: "4%" }}>
              <Button type="submit">Send
              </Button>
            </Col>
          </Row>
        </Container>
          </Form>
      </Container>
  </div>);
}