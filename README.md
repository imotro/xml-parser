# xml-parser
parse XML to objects in Node.js or Browser.

## Notice
the functionality of this parser is very limited beyond the parsing of XML. there are no special commands to select certain elements based on attributes (selectors). simply refrence an element the way you would and retreive attributes the way you would in browsers (do i really need this notice..?)

## Overview
this goes over every character in the provided XML and turns its attributes and inner value to JSON

## Usage
NOTE: refrence children directly, dont use `parent.parent.parent.child`, just do `child`. attributes still work the same as you would expect
I understand this may become an issue when having multiple children with the same name. A solution is being developed.

```js
XMLParser.parse('<xml>')
XMLParser.isXML('<xml>')
```
this library does not use any built in APIs or modules, so it works in node.js and browsers
 ### Examples:
Node.js
 ```js
//Node.js CommonJS
const XMLParser = require('xml.js');
//Node.js ESM
import XMLParser from 'xml.js'

const parser = new XMLParser()
const XML = '<element attr="val" attr2=val2>inner value</element>'
const output = parser.parse(XML)
console.log(output) // { element: { attr: 'val', attr2: 'val2' }, value: 'inner value' }
```

Browser
```html
<script src="xml.js"></script>
<script>
const parser = new XMLParser()
const XML = '<element attr="val" attr2=val2>inner value</element>'
const output = parser.parse(XML)
console.log(output) // { element: { attr: 'val', attr2: 'val2' }, value: 'inner value' }
</script>
```
you can download index.js file above into your project or use [This link](https://raw.githubusercontent.com/imotro/xml-parser/main/index.js)

