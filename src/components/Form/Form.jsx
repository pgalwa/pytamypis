import React, { useState } from "react"
import data from "../../data.json"

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        <Label htmlFor="name">Imie</Label>
        <Input
          name="name"
          id="name"
          mb={3}
          onChange={({ target: { value } }) => handleSetForm("name", value)}
        />
        <Label htmlFor="surname">Nazwisko</Label>
        <Input
          name="surname"
          id="surname"
          mb={3}
          onChange={({ target: { value } }) => handleSetForm("surname", value)}
        />
        <Label htmlFor="sound">Wojewodztwo</Label>
        <Input
          name="sound"
          id="sound"
          mb={3}
          onChange={handleSelectVoivodeship}
          type="select"
        >
          <option></option>
          {data.voivodeships.map((v, idx) => (
            <option key={v.name} value={idx}>
              {v.name}
            </option>
          ))}
        </Input>
        {voivodeship && (
          <>
            <Label htmlFor="county">Powiat</Label>
            <Input
              name="county"
              id="county"
              type="select"
              mb={3}
              onChange={handleSelectCounty}
            >
              <option></option>
              {voivodeship.counties.map((c, idx) => (
                <option key={c.name} value={idx}>
                  {c.name}
                </option>
              ))}
            </Input>
          </>
        )}
        <Label htmlFor="other">
          <Input
            name="other"
            id="other"
            type="checkbox"
            mb={3}
            checked={isOther}
            onClick={() => setIsOther(!isOther)}
          />
          Inny adres
        </Label>
        {isOther && (
          <>
            <Label htmlFor="pisName">
              Nazwa Stacji Epidemiologiczno Sanitarnej
            </Label>
            <Input
              name="pisName"
              id="pisName"
              placeholder="Powiatowa Stacja Sanitarno-Epidemiologiczna w m.st. Warszawie"
              mb={3}
              onChange={({ target: { value } }) => handlePisData("name", value)}
            />
            <Label htmlFor="name">Ulica</Label>
            <Input
              name="street"
              id="street"
              placeholder="ul. Kochanowskiego 21"
              mb={3}
              onChange={({ target: { value } }) =>
                handlePisData("street", value)
              }
            />
            <Label htmlFor="postalCode">Kod Pocztowy i Miasto</Label>
            <Input
              name="postalCode"
              id="postalCode"
              placeholder="31-752 Kraków"
              mb={3}
              onChange={({ target: { value } }) =>
                handlePisData("postalCode", value)
              }
            />
          </>
        )}
        <Button onClick={handlePrint} variant="secondary">
          Drukuj
        </Button>
    </FormGroup>
  )
}

export default PdfForm
