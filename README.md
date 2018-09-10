[![Build Status](https://travis-ci.org/telemark/avtale-templates.svg?branch=master)](https://travis-ci.org/telemark/avtale-templates)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# avtale-templates

Templates for avtaler

## Usage

```JavaScript
const getTemplate = require('avtale-template')

console.log(getTemplate('elevpc'))
```

returns

```JavaScript
{ "file": "elevpc.docx",
  "name": "Avtale om leasing-pc fra Telemark fylkeskommune",
  "dueDays": 75,
  "dueDate": false,
  "expireDate": false,
  "expireDays": false,
  "requireDigitalSignature": true,
  "requireGuardianSignature": true,
  "requireGuardianConsent": true,
  "dropManualDistribution": false,
  "archive": {
    "Title": "Leieavtale elev-pc",
    "Category": "Dokument ut",
    "SignOff": true,
    "AccessCode": "13",
    "Paragraph": "Offl §13 jfr Fvl §13.1",
    "NoarkClassificationCode": "B31",
    "Status": "J",
  },
  "distribution": {
    "kunDigitalLevering": true,
    "lenker": [
      {
        "ledetekst": "Mer informasjon:",
        "urlLenke": "https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen",
        "urlTekst": "PC i skolen"
      },
      {
        "ledetekst": "Se også:",
        "urlLenke": "https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Leasing-PC",
        "urlTekst": "Leasing PC"
      },
      {
        "ledetekst": "Prøveordning:",
        "urlLenke": "https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Egen-PC-proeveordning",
        "urlTekst": "Bruk egen PC"
      }
    ]
  }
```

## License

[MIT](LICENSE)