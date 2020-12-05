# Pytamy PiS

## Installation
```
  npm install
  npm start
```

## Dodawanie powiatu

Aktualnie plik, z ktorego czerpane sa dane to `src/data.json`. Ma bardzo prostą strukture

```json

{
    "voivodeships": [
        {
            "name": "<Nazwa wojewodztwa>",
            "counties": [
                {
                    "name": "<Nazwa powiatu>",
                    "letterData": {
                        "name": "<Nazwa PSSE (Powiatowej Stacji Sanitarno-Epidemiologicznej) odpowiedzialnej za zbierane danych dla danego powiatu>",
                        "street": "<Adres PSSE>",
                        "postalCode":  "<Kod pocztowy i miasto PSSE>",
                        "email":  "<Adres email PSSE>"
                    }
        }
    ]                
}
```

Aby dodac nowe wojedzowdztwo nalezy po prostu kopiowac caly obiekt z przykladu i uzupelnic dane.

Aby dodac nowy PSSE nalezy skopiowac obiekt z tablicy w kluczu "counties"

Dodawajcie smialo Pull Requesty z danymi. Swiat nie konczy sie na Warszawie i Krakowie ;)