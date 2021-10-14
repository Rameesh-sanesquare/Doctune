export function spaceCutter(txt) {
    let text = txt;
    if (txt != null && txt[0] === ' ')
        text = txt.trim()
    if (txt != null && txt[txt.length - 1] === ' ' && txt[txt.length - 2] === ' ') {
        text = txt.trim()
        text += ' ';
    }
    return text
}
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export function isEmail(value) {
    return emailRegex.test(value);
}