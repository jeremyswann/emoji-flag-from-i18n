# Get Flag Emoji from i18n string

Returns escaped unicode flag emoji from a i18n locale string e.g 'en-AU'.

Intended for React.js, also suitable for vanilla JavaScript and frameworks.

The other pupose of this utility function is to easily get and display flag symbols
in JSX. Since you can't inject HTML entities into components as strings the
unicode characters must be escaped. *e.g.* 
`<Flag>{'&#x1F1E6;&#x1f1fa;'}</flag>`
returns `&#x1F1E6;&#x1f1fa;` *but* 
`<Flag>{'\uD83C\uDDE6\uD83C\uDDFA'}</flag>`
returns `🇦🇺`

## Use
```javascript
getFlag('en-AU')
// \uD83C\uDDE6\uD83C\uDDFA
```

*TODO*:
* Write tests
* Accept other variations of country strings
* Build in return options other than escaped unicode
