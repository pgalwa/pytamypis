import React from "react";
import { Container, Col } from "reactstrap";
import Logo from "../../assets/img/ppis.png";

import Form from "../../components/Form";
import content from "./home.content.json";

const Home = (props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="main">
        <Container className="px-5 text-center">
          <div className="section">
            <img alt="logo" src={Logo} style={{ width: "25%" }} />

            <h2 className="display-4 page-title">{content.title}</h2>

            <p className="lead mt-2">{content.text}</p>
            <p className="lead mt-5">{content.text2}</p>
            <p className="lead mt-2">{content.text3}</p>
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
