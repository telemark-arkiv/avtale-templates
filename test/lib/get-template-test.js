const test = require('ava')
const getTemplate = require('../../index')
const templates = require('../../templates/templates.json')

const expectedData = {
  file: 'elevpc.docx',
  name: 'Låneavtale elevpc',
  dueDays: 1,
  dueDate: false,
  expireDate: false,
  expireDays: false,
  requireDigitalSignature: true,
  archive: {
    Category: 'Dokument ut',
    SignOff: true,
    AccessCode: '13',
    Paragraph: 'Offl §13 jfr Fvl §13.1',
    NoarkClassificationCode: 'B31',
    Status: 'J'
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
