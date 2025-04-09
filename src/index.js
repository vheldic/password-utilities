// @if24b262/password-utilities

module.exports = {
  generateStrongPassword,
  isStrongPassword,
};

function generateStrongPassword(length = 12) {
  if (length < 8)
    length = 8;
  const allowedPasswordCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  var strongPassword = Array.from({ length }, () => {
    const randomAllowedPasswordCharacterIndex = Math.floor(
      Math.random() * allowedPasswordCharacters.length
    );
    const randomAllowedPasswordCharacter = allowedPasswordCharacters.charAt(
      randomAllowedPasswordCharacterIndex
    );
    return randomAllowedPasswordCharacter;
  }).join("");
  while (!isStrongPassword(strongPassword)) {
    strongPassword = generateStrongPassword(length);
  }
  return strongPassword;
}

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  const isPasswordStrong =
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*()_+]/.test(password);
  return isPasswordStrong;
}
