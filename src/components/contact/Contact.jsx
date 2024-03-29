import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import connect from '../../assets/img/connect.png';

const Contact = (props) => {
  const formContent = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formContent);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [pressReset, setPressReset] = useState(false);
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch(
      'https://portfolio-server.azurewebsites.net/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      }
    );
    setButtonText('Send');
    let result = await response.json();
    setFormDetails(formContent);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({
        succes: false,
        message: 'Something went wrong, please try again later.',
      });
    }
  };
  const handleReset = async (e) => {
    setFormDetails({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <div className="contact-box">
          <Row>
            <Col size={12} md={5}>
              <img src={connect} alt="Contact Me" />
            </Col>
            <Col size={12} md={7}>
              <div className="form-box">
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                  <Row>
                    <Col size={12} sm={6}>
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate('firstName', e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6}>
                      <input
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate('lastName', e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6}>
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6}>
                      <input
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                      />
                    </Col>
                    <Col size={12}>
                      <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onFormUpdate('message', e.target.value)
                        }
                      ></textarea>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                      <button type="reset" onClick={() => setPressReset(true)}>
                        <span>Reset</span>
                      </button>
                    </Col>
                    {!pressReset && status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? 'danger' : 'success'
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
