import React, { useState } from "react"
import data from "../../data.json"

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Container from "reactstrap/lib/Container";

const PdfForm = () => {
  const [form, setForm] = useState({
    letterData: {},
  })
  const [voivodeship, setVoivodeship] = useState(null)
  const [isOther, setIsOther] = useState(false)
  const [email, setEmail]= useState('');
  const handlePrint = () => {
    window.localStorage.setItem("form", JSON.stringify(form))
    window.open("/pdf", "_blank")
  }
  const handleSetForm = (key, value) => setForm({ ...form, [key]: value })
  const handlePisData = (key, value) =>
    setForm({ ...form, letterData: { ...form.letterData, [key]: value } })

  const handleSelectVoivodeship = ({ target: { value } }) => {
    setVoivodeship(data.voivodeships[value])
  }

  const handleSelectCounty = ({ target: { value } }) => {
    handleSetForm("letterData", voivodeship.counties[value].letterData)
    setEmail(voivodeship.counties[value].letterData.email)
  }

  const handleSetOther = () => {
    setIsOther(!isOther)
  }

  return (
    <FormGroup className="pdf-form">
      <p>Aby dostac pdf, wypelnij ponizszy formularz</p>
        <Label htmlFor="name"></Label>
        <Input
          name="name"
          id="name"
          mb={3}
          placeholder="Imię"
          onChange={({ target: { value } }) => handleSetForm("name", value)}
        />
        <Label htmlFor="surname"></Label>
        <Input
          name="surname"
          id="surname"
          placeholder="Nazwisko"
          mb={3}
          onChange={({ target: { value } }) => handleSetForm("surname", value)}
        />
        <Label htmlFor="street"></Label>
        <Input
          name="street"
          id="street"
          placeholder="Ulica"
          mb={3}
          onChange={({ target: { value } }) => handleSetForm("street", value)}
        />
        <Label htmlFor="street"></Label>
        <Input
          name="postalCode"
          id="postalCode"
          placeholder="Kod Pocztowy i Miasto"
          mb={3}
          onChange={({ target: { value } }) => handleSetForm("postalCode", value)}
        />
        <Label htmlFor="email"></Label>
        <Input
          name="email"
          id="email"
          placeholder="Adres E-mail"
          mb={3}
          onChange={({ target: { value } }) => handleSetForm("surname", value)}
        />
        <Label check className="py-3 pl-4">
          <Input
            type="checkbox"
            checked={isOther}
            onClick={() => setIsOther(!isOther)}
          />{' '}
          Inny adres
        </Label>
        <Label htmlFor="sound"></Label>
        {!isOther && (<Input
          name="sound"
          id="sound"
          mb={3}
          onChange={handleSelectVoivodeship}
          type="select"
        >
          <option value="" disabled selected>Wybierz wojewodztwo</option>
          {data.voivodeships.map((v, idx) => (
            <option key={v.name} value={idx}>
              {v.name}
            </option>
          ))}
        </Input>)}
        {voivodeship && !isOther && (
          <FormGroup className="mt-3"> 
            <Input
              name="county"
              id="county"
              type="select"
              mb={3}
              onChange={handleSelectCounty}
            >
              <option value="" disabled selected>Wybierz powiat</option>
              {voivodeship.counties.map((c, idx) => (
                <option key={c.name} value={idx}>
                  {c.name}
                </option>
              ))}
            </Input>
          </FormGroup>
        )}
        {isOther && (
          <>
            <Label htmlFor="pisName">
            </Label>
            <Input
              name="pisName"
              id="pisName"
              placeholder="Nazwa Stacji Epidemiologiczno Sanitarnej"
              mb={3}
              onChange={({ target: { value } }) => handlePisData("name", value)}
            />
            <Label htmlFor="name"></Label>
            <Input
              name="street"
              id="street"
              placeholder="ulica i numer budynku"
              mb={3}
              onChange={({ target: { value } }) =>
                handlePisData("street", value)
              }
            />
            <Label htmlFor="postalCode"></Label>
            <Input
              name="postalCode"
              id="postalCode"
              placeholder="Kod Pocztowy i Miasto"
              mb={3}
              onChange={({ target: { value } }) =>
                handlePisData("postalCode", value)
              }
            />
          </>
        )}
        <br className="mt-3" />
        <Button onClick={handlePrint} variant="secondary">
          Drukuj
        </Button>
        {email && (<p className="mt-2"> Wyslij email na <a href={`mailto:${email}`}>{email}</a> </p>)}
    </FormGroup>
  )
}

export default PdfForm
