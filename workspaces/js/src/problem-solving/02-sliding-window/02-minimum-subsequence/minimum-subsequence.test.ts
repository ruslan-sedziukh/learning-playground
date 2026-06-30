import { minWindow } from '.'

describe('minWindow', () => {
  it.each([
    {
      str1: 'abcdebdde',
      str2: 'bde',
      expected: 'bcde',
    },
    {
      str1: 'fgrqsqsnodwmxzkzxwqegkndaa',
      str2: 'kzed',
      expected: 'kzxwqegknd',
    },
    {
      str1: 'michmznaitnjdnjkdsnmichmznait',
      str2: 'michmznait',
      expected: 'michmznait',
    },
    {
      str1: 'afgegrwgwga',
      str2: 'aa',
      expected: 'afgegrwgwga',
    },
    {
      str1: 'abcdbebe',
      str2: 'bbe',
      expected: 'bebe',
    },
    {
      str1: 'ababecbe',
      str2: 'abe',
      expected: 'abe',
    },
    {
      str1: 'AUoIstGPpUtPDvZTksRJgIlIaAEsqTfqbTgOfrCPldhVPQWnoXulRCzeidNlMUHOvWxzYKjQmDKKqERImKIDuEvbhBuApjunwjaxCzTusQHAVQnVIBJboHMLxzwdQRocnAWuPmTOxIPsfLdyldcfJbEbUZZMcoHjsCnwJjRkutWGWEpDlJNoNxGXPGholMFRBnTirLAxemkFnuiuhNIzblTArTjCbxqVtIVsuBIGjWmbsHIEgJADOypbWosjkvEFVCScgAztGWBGyMDxcIofATZkdIHstrFJsUAVZTmMlDziLVWASBTCvYYVDSglliuWVohbvoZlAzDvcVQuZrzZlzXoJjQXimWweibLkcIdRbrMYXfdveCAKJLZZJAIDCqvMxCUSczEGTghUaZByqwYpgTNfjiToWMhMQqxqbgvzzTslGRKqhoGpePNSpcFLrGYOuDNwRjHlPJSLAZqdjWCXBQWaQtCoryLABTqNcCqcSaOXHMAQpDmtYQQwshwCyWcDWqlasyzPbJRziWXBUGDEFyWtgYzIIKyguvHLVSrKJErsvcsKWDNCluEHQhoyfpIUkzJpCcBtthwgPiGrqpunIqOPMGCyMnllKjoBhnQhoQBbfQYhZTFUjEBuxDFyJQGsYoAQGjcjcnipeNkBWqiWJDYFTksSTmaxBTNOpmJKhCQhIkRdsdXCnYOzoOfyqVyJUGZxBuglKJdoLzoJswSASdWjFHNwKBFgKlRSvqppDlefjqLeQyNxCesHZnKKubtKIvZkRDjDVUtBXMonsI',
      str2: 'pUPnlzKxWfHGNFreDCzDZZdyQqLrCrCqXEsEHPGyTBIxtI',
      expected:
        'pUtPDvZTksRJgIlIaAEsqTfqbTgOfrCPldhVPQWnoXulRCzeidNlMUHOvWxzYKjQmDKKqERImKIDuEvbhBuApjunwjaxCzTusQHAVQnVIBJboHMLxzwdQRocnAWuPmTOxIPsfLdyldcfJbEbUZZMcoHjsCnwJjRkutWGWEpDlJNoNxGXPGholMFRBnTirLAxemkFnuiuhNIzblTArTjCbxqVtIVsuBIGjWmbsHIEgJADOypbWosjkvEFVCScgAztGWBGyMDxcIofATZkdIHstrFJsUAVZTmMlDziLVWASBTCvYYVDSglliuWVohbvoZlAzDvcVQuZrzZlzXoJjQXimWweibLkcIdRbrMYXfdveCAKJLZZJAIDCqvMxCUSczEGTghUaZByqwYpgTNfjiToWMhMQqxqbgvzzTslGRKqhoGpePNSpcFLrGYOuDNwRjHlPJSLAZqdjWCXBQWaQtCoryLABTqNcCqcSaOXHMAQpDmtYQQwshwCyWcDWqlasyzPbJRziWXBUGDEFyWtgYzIIKyguvHLVSrKJErsvcsKWDNCluEHQhoyfpIUkzJpCcBtthwgPiGrqpunIqOPMGCyMnllKjoBhnQhoQBbfQYhZTFUjEBuxDFyJQGsYoAQGjcjcnipeNkBWqiWJDYFTksSTmaxBTNOpmJKhCQhIkRdsdXCnYOzoOfyqVyJUGZxBuglKJdoLzoJswSASdWjFHNwKBFgKlRSvqppDlefjqLeQyNxCesHZnKKubtKI',
    },
    {
      str1: 'abe',
      str2: 'ababecbe',
      expected: '',
    },
  ])(
    'returns correct substring for $str1 and $str2',
    ({ str1, str2, expected }) => {
      expect(minWindow(str1, str2)).toBe(expected)
    }
  )
})
