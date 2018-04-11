const path = require('path')
const templates = require('./templates/templates.json')

module.exports = id => {
  if (!id) {
    throw new Error('Missing required input: template id')
  }

  let doc = templates[id]

  if (!doc) {
    throw new Error('Template not found')
  } else {
    doc.filePath = path.join(__dirname, 'templates', doc.file)
    return doc
  }
}
