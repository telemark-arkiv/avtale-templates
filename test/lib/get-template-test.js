const test = require('ava')
const getTemplate = require('../../index')
const templates = require('../../templates/templates.json')

const expectedData = {
  file: 'elevpc.docx',
  name: 'Avtale om leasing-pc fra Telemark fylkeskommune',
  dueDays: 75,
  dueDate: false,
  expireDate: false,
  expireDays: false,
  requireDigitalSignature: true,
  requireGuardianSignature: true,
  requireGuardianConsent: true,
  archive: {
    Category: 'Dokument ut',
    SignOff: true,
    AccessCode: '13',
    Paragraph: 'Offl §13 jfr Fvl §13.1',
    NoarkClassificationCode: 'B31',
    Status: 'J'
  },
  distribution: {
    kunDigitalLevering: true,
    lenker: [
      {
        ledetekst: 'Mer informasjon:',
        urlLenke: 'https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen',
        urlTekst: 'PC i skolen'
      },
      {
        ledetekst: 'Mer informasjon',
        urlLenke: 'https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Leasing-PC',
        urlTekst: 'Leasing PC'
      },
      {
        ledetekst: 'Mer informasjon',
        urlLenke: 'https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Egen-PC-proeveordning',
        urlTekst: 'Bruk egen PC'
      }
    ]
  }
}

test('It returns data if template exists', t => {
  Object.keys(templates).forEach(template => t.truthy(getTemplate(template)))
})

test('It returns expected matedata', t => {
  let template = getTemplate('elevpc')
  delete template.filePath
  t.deepEqual(expectedData, template, 'Data OK')
})

test('Requires input', t => {
  const error = t.throws(() => getTemplate())

  t.is(error.message, 'Missing required input: template id')
})

test('Throws if template does not exist', t => {
  const error = t.throws(() => getTemplate('finnes-ikke'))

  t.is(error.message, 'Template not found')
})
