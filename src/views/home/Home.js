import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Home = (props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="main">
        <Container>
          <div className="section">
            <Jumbotron>
              <h1 className="display-3">Pytamy PiS</h1>
              <hr className="my-2" />
              <p className="lead">
                Poniewaz ostatnio został ograniczony dostep do informacji nt.
                stanu covid-19 w wojewodztwach, postanowilismy skorzystac z
                prawa dostepu do informacji publicznej i zachecic Was do
                wysylania wnioskow do Waszego Powiatowego Inspektatoratu
                Sanitarnego
              </p>
              <hr className="my-2" />
              <p className="lead">
                <Button color="primary">Więcej</Button>
              </p>
            </Jumbotron>
          </div>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
