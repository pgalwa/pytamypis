import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

const pdfText = `
Na podstawie art. 2 ust. 1 i art. 10 ust. 1 ustawy z dnia 6 września 2001 r. o dostępie do informacji publicznej
(j. t. Dz. U. z 2016 r. poz. 1764 ze zm.) proszę o udostępnienie informacji w następującym zakresie:
`;

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const Pdf = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    const formRaw = window.localStorage.getItem("form");
    setForm(JSON.parse(formRaw));
  }, []);

  useEffect(() => {
    if (form) {
      console.log(form);
      window.print();
    }
  }, [form]);

  return form ? (
    <Container className="p-5">
      <p>{`${form.name} ${form.surname}`}</p>
      <p>{form.street}</p>
      <p>{form.postalCode}</p>
      <p>{form.email}</p>
      <br />
      <p className="text-right">{form.letterData.name}</p>
      <p className="text-right">{form.letterData.street}</p>
      <p className="text-right">{form.letterData.postalCode}</p>{" "}
      <h3 className="text-center">
        WNIOSEK O UDOSTĘPNIENIE INFORMACJI PUBLICZNEJ
      </h3>
      <p className="mt-3">{pdfText}</p>
      <p className="mt-3">{`a) Liczby nowych przypadków Covid-19 zanotowanych przez PSEE na dzień ${yesterday.toLocaleDateString(
        "pl"
      )}`}</p>
      <p>{`b) Liczby nowych zgonów z przyczyny Covid-19 zanotowanych przez PSEE na dzień ${yesterday.toLocaleDateString(
        "pl"
      )}`}</p>
      <p className="mt-3">
        {`Odpowiedź proszę przekazać w formie elektronicznej bądź skanów dokumentów na adres: ${form.email}`}{" "}
      </p>
      <p className="text-right mt-5">Pozdrawiam Serdecznie</p>
      <p className="text-right">{`${form.name} ${form.surname}`}</p>
    </Container>
  ) : null;
};

export default Pdf;
