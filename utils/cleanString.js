module.exports = input => {
  // Use regular expressions to match and replace <p>, </p>, and \n
 return input.replace(/<p>|<\/p>|\n/g, '');
}
