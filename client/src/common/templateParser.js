const delimiter = '|::|'

const replacer = (str, pattern) => {
  return str.replace(pattern, `${delimiter}${pattern}${delimiter}`);
}

export const parse = (patternComponentMap, template) => {
  const templateToUse = template.replace(delimiter, "");
  const patterns = Object.keys(patternComponentMap);
  const replacedTemplate = patterns.reduce(replacer, templateToUse);
  let splitedTemplate = replacedTemplate.split(delimiter);
  splitedTemplate = splitedTemplate.filter(x => x && x !== '');

  const result = splitedTemplate.map(x => patternComponentMap[x] || x);
  return result;
}