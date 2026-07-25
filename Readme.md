# Caesar Cipher Encryption Tool

A web app that encrypts and decrypts messages using the Caesar Cipher — a classic substitution cipher where each letter is shifted a fixed number of positions in the alphabet.

Live demo: _add your deployed link here once hosted_

## Features
- Encrypt or decrypt any message
- Adjustable shift key (0–25)
- Handles uppercase and lowercase letters correctly
- Leaves numbers, spaces, and punctuation unchanged
- One-click copy of the result

## How it works
1. Type a message and choose a shift key
2. Choose Encrypt or Decrypt mode
3. Each letter is shifted forward (encrypt) or backward (decrypt) by the shift key, wrapping around the alphabet (Z + 1 → A)
4. Non-letter characters pass through unchanged

Example: with shift key `3`, `HELLO` encrypts to `KHOOR`, and decrypting `KHOOR` with the same key returns `HELLO`.
## live demo:
https://dollyyeolekar.github.io/caesarcipher/

## Technologies
- HTML5
- CSS3
- JavaScript (vanilla, no frameworks)

## What I learned
- Basics of cryptography (substitution ciphers)
- String manipulation in JavaScript
- ASCII character codes
- Modular arithmetic (wrapping the alphabet with `%`)
- Encryption and decryption logic

## Run it locally
Clone the repo and open `index.html` in your browser — no build step needed.

```bash
git clone <your-repo-url>
cd caesar-cipher
open index.html
```

## Project structure
```
caesar-cipher/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Note on security
The Caesar Cipher is one of the oldest and simplest ciphers, easily broken with basic frequency analysis. This project is for learning cryptography fundamentals, not for securing real data.