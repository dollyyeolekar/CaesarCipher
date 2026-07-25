const messageInput = document.getElementById('message');
const shiftInput = document.getElementById('shift');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const resultEl = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

let mode = 'encrypt'; // 'encrypt' or 'decrypt'

// Shifts a single letter by `amount` positions, wrapping around A-Z / a-z.
// Non-letter characters (spaces, numbers, punctuation) are returned unchanged.
function shiftChar(char, amount) {
  const code = char.charCodeAt(0);

  // Uppercase A-Z
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + amount) % 26 + 26) % 26 + 65);
  }
  // Lowercase a-z
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + amount) % 26 + 26) % 26 + 97);
  }
  // Anything else (spaces, numbers, punctuation) stays the same
  return char;
}

function caesarCipher(text, shift, mode) {
  const amount = mode === 'encrypt' ? shift : -shift;
  return text
    .split('')
    .map(char => shiftChar(char, amount))
    .join('');
}

function updateResult() {
  const text = messageInput.value;
  const shift = parseInt(shiftInput.value, 10) || 0;

  if (text.length === 0) {
    resultEl.textContent = 'Your result will show up here';
    resultEl.classList.add('placeholder');
    return;
  }

  const output = caesarCipher(text, shift, mode);
  resultEl.textContent = output;
  resultEl.classList.remove('placeholder');
}

function setMode(newMode) {
  mode = newMode;
  encryptBtn.classList.toggle('active', mode === 'encrypt');
  decryptBtn.classList.toggle('active', mode === 'decrypt');
  updateResult();
}

messageInput.addEventListener('input', updateResult);
shiftInput.addEventListener('input', updateResult);
encryptBtn.addEventListener('click', () => setMode('encrypt'));
decryptBtn.addEventListener('click', () => setMode('decrypt'));

copyBtn.addEventListener('click', () => {
  const text = resultEl.textContent;
  if (!text || resultEl.classList.contains('placeholder')) return;

  navigator.clipboard.writeText(text).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove('copied');
    }, 1200);
  });
});

updateResult();