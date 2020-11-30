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
  }

  const handleSetOther = () => {
    setIsOther(!isOther)
  }

  return (
    <FormGroup>
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
          <FormGroup>
            <Label htmlFor="county">Powiat</Label>
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
        <Container>
        <Label check>
          <Input
            type="checkbox"
            checked={isOther}
            onClick={() => setIsOther(!isOther)}
          />{' '}
          Inny adres
        </Label>
        </Container>
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
    </FormGroup>
  )
}

export default PdfForm
