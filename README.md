[![Build Status](https://travis-ci.org/telemark/avtale-templates.svg?branch=master)](https://travis-ci.org/telemark/avtale-templates)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)]
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/avtale-templates.svg)](https://greenkeeper.io/)

# avtale-templates

Templates for avtaler

## Usage

```JavaScript
const getTemplate = require('avtale-template')

console.log(getTemplate('elevpc'))
```

returns

```JavaScript
{ file: 'elevpc.docx',
  name: 'Låneavtale elevpc',
  dueDays: 1,
  dueDate: false,
  expireDate: false,
  archive:
   { Category: 'Dokument ut',
     SignOff: true,
     AccessCode: '13',
     Paragraph: 'Offl §13 jfr Fvl §13.1',
     NoarkClassificationCode: 'B31',
     Status: 'J' },
  filePath: '/templates/elevpc.docx' }
```

## License

[MIT](LICENSE)

![Robohash image of avtale-templates](https://robots.kebabstudios.party/avtale-templates.png "Robohash image of avtale-templates")