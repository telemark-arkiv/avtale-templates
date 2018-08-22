const test = require('ava')
const { readdir } = require('fs').promises

test('All files are available', async t => {
  const files = await readdir('templates')
  const templates = require('../../templates/templates.json')
  const allTemplates = Object.values(templates).map(template => template.file)
  allTemplates.forEach(template => {
    t.deepEqual(files.includes(template), true, `${template} ok`)
  })
})
