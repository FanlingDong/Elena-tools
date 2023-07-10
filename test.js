const elena = require('./index');

const dtStr = elena.formatDate(new Date());
console.log(dtStr)
console.log('---------------');

const htmlStr1 = '<h1 title="abc">This is h1 tag<span>123&nbsp;</span></h1>'
const str1 = elena.HTMLEscape(htmlStr1);
console.log(str1)
console.log('---------------');

const htmlStr2 = '&lt;h1 title=&quot;abc&quot;&gt;This is h1 tag&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'
const str2 = elena.HTMLUnescape(htmlStr2);
console.log(str2)
console.log('---------------');

