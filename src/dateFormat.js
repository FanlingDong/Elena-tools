// Format Date
function formatDate(dateStr) {
    const dt = new Date(dateStr);
    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());
    const HH = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${y}-${m}-${d} ${HH}:${mm}:${ss}`
}
// Complement zero function
function padZero(n){
    return n > 9 ? n : '0' + n;
}

module.exports = {
    formatDate
}
