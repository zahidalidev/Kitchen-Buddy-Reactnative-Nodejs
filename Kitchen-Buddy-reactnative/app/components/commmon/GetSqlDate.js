export default (date) => {
    var pad = function (num) { return ('00' + num).slice(-2) };
    return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}