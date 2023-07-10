## Install

```
npm install format-date-elena
```

## Import
```js
const elena = require('format-date-elena')
```

## Format Date
```js
// Call formatDate to format the date ans time
const dtStr = elena.formatDate(new Date());
// 2023-07-10 15:06:41
console.log(dtStr)
```
## Escape special Chars in HTML 
```js
const htmlStr1 = '<h1 title="abc">This is h1 tag<span>123&nbsp;</span></h1>'
const str1 = elena.HTMLEscape(htmlStr1);
console.log(str1)
```

## Unescape special Chars in HTML
```js
const htmlStr2 = '&lt;h1 title=&quot;abc&quot;&gt;This is h1 tag&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'
const str2 = elena.HTMLUnescape(htmlStr2);
console.log(str2)
```
## Open resource protocol
ISC
