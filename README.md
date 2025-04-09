# @if24b262/password-utilities 

> A small utility library that helps you work with passwords.  
> Version 1.0.2 includes patch fix: generateStrongPassword function automatically uses a length of 8 when using smaller number 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
   - [Examples](#examples)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @if24b262/password-utilities 
```
Install via yarn:

```bash
yarn add @if24b262/password-utilities 
```

## Usage

Basic Usage to toSnakeCase Import:

```js
import { isStrongPassword, generateStrongPassword } from '@if24b262/password-utilities';
```

### Examples

Convert a string to snake_case::

```js

const password = "Abc123$!";
console.log(isStrongPassword(password)); 

const pwd = generateStrongPassword(16);
console.log(pwd); 

```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

If you discover a security vulnerability, please see our [SECURITY.md](./SECURITY.md) for instructions on responsible disclosure.

## License

This project is licensed under the [MIT License](./LICENSE.md).
