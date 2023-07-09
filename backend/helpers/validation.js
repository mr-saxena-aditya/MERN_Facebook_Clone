/**
 * Validates an email address.
 * 
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 */
exports.validateEmail = (email) => {
    /**
     * Regular expression for email validation
     * ^ asserts the start of the string.
     * [\w.-]+ matches one or more word characters (letters, digits, or underscores), dots, or hyphens. This represents the local part of the email address before the "@" symbol.
     * @ matches the "@" symbol.
     * [a-zA-Z_-]+? matches one or more alphabetical characters (upper or lower case) or underscores. This represents the domain part of the email address after the "@" symbol.
     * (?:\.[a-zA-Z]{2,})+ is a non-capturing group that matches a dot followed by two or more alphabetical characters. This represents the top-level domain (TLD) part of the email address. The "+" quantifier allows for multiple TLDs separated by dots.
     * $ asserts the end of the string.
     */
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
  
    // Convert email to lowercase and match against the regular expression
    return emailRegex.test(String(email).toLowerCase());
  };


  exports.validateTextLength = (text, min, max) => {
    return text.length >= min && text.length <= max;
  };