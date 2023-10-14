const XMLParser = require('./xml.min.js')
const _ = new XMLParser()
let xml = _.parse(`<test href="https://example.com"> <q></q> </test>`)
console.log('The href of the element named test is %s',xml.test.href);
