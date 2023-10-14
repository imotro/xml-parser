class XMLParser {
  constructor() {
    this.xml = '';
    this.json = {};
  }
  parse(xml) {
    this.xml = xml
    const json = {};
    let i = 0;
    let attr = '';
    let val = '';
    let inner = ''
    while (i < xml.length) {
      if (xml[i] === '<') {
        i++;
        let tag = '';
        while (xml[i] !== ' ' && xml[i] !== '>') {
          tag += xml[i];
          i++;
        }
        if (tag.includes('/')) {
          break;
        }

        let attributes = {};
        while (xml[i] !== '>') {
          while (xml[i] === ' ') {
            i++;
          }

          let attr = '';
          while (xml[i] !== '=' && xml[i] !== '>') {
            attr += xml[i];
            i++;
          }

          while (xml[i] === ' ' || xml[i] === '=') {
            i++;
          }

          let val = '';
          if (xml[i] === '"') {
            i++;
            while (xml[i] !== '"' && xml[i] !== '>') {
              val += xml[i];
              i++;
            }
            i++;
          } else if (xml[i] === "'") {
            i++;
            while (xml[i] !== "'" && xml[i] !== '>') {
              val += xml[i];
              i++;
            }
            i++;
          } else {
            while (xml[i] !== ' ' && xml[i] !== '>') {
              val += xml[i];
              i++;
            }
          }
          if (val == 'true' || val == 'false') {
            val == 'true' ? val = true : val = false;
          }
          attributes[attr] = val;
        }
        while (xml[i + 1] !== '<') {
          i++
          inner = `${inner}${xml[i]}`
        }

        if (inner == 'true' || inner == 'false') {
          inner == 'true' ? inner = true : inner = false;
        }

        json[tag] = attributes;
        json['value'] = inner;
      } else {
        i++;
      }
    }
    this.json = json
    return json;

  }
  isXML(txt) {
    const regex = /^<([a-zA-Z_][\w-]*)\b/;
    return regex.test(txt);
  }
}
module.exports = XMLParser;