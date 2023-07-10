// Escape HTML chars function
function HTMLEscape(htmlStr) {
    return htmlStr.replace(/[<>"]|&/g, (match) => {
        switch (match){
            case '<':
                return "&lt;"
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// Unescape HTML Chars
function HTMLUnescape(htmlStr){
    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match)=> {
        switch (match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

module.exports = {
    HTMLEscape,
    HTMLUnescape
}
