import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";

const pdfText = `
Na podstawie art. 2 ust. 1 i art. 10 ust. 1 ustawy z dnia 6 września 2001 r. o dostępie do informacji publicznej
(j. t. Dz. U. z 2016 r. poz. 1764 ze zm.) proszę o udostępnienie informacji w następującym zakresie:
`;

const Pdf = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    const form = window.localStorage.getItem("form");
    setForm(JSON.parse(form));
  }, []);

  useEffect(() => {
    if (form) {
      console.log(form);
      window.print();
    }
  }, [form]);

  return form ? (
    <Container className="p-5">
      <Row>
        <Col>Wnioskodawca</Col>
      </Row>
      <Row>{`${form.name} ${form.surname}`}</Row>
      <Row>{form.street}</Row>
      <Row>{form.postalCode}</Row>
      <Row>{form.email}</Row>
      <br />
      <p className="text-right">{form.letterData.name}</p>
      <p className="text-right">{form.letterData.street}</p>
      <p className="text-right">{form.letterData.postalCode}</p>

      <Row>
        {" "}
        <h1 className="text-center">
          WNIOSEK O UDOSTĘPNIENIE INFORMACJI PUBLICZNEJ
        </h1>
      </Row>
      <p className="mt-3">{pdfText}</p>
    </Container>
  ) : null;
};

export default Pdf;
