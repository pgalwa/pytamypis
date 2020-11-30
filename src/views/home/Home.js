import React from "react";
import { Container, Col } from "reactstrap";

import Form from '../../components/Form';

const Home = (props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="main">
        <Container className="px-5 text-center">
          <div className="section">
              <h1 className="display-1 page-title">Pytamy PiS</h1>
              <p className="lead">
                Poniewaz ostatnio został ograniczony dostep do informacji nt.
                stanu covid-19 w wojewodztwach, postanowilismy skorzystac z
                prawa dostepu do informacji publicznej i zachecic Was do
                wysylania wnioskow do Waszego Powiatowego Inspektatoratu
                Sanitarnego
              </p>
          </div>
          <Col md={8}>
          <Form />
          </Col>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
