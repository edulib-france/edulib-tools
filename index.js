'use strict';

const removeAccents = require('remove-accents');
const UAI_ALPHABET = 'ABCDEFGHJKLMNPRSTUVWXYZ';

module.exports.isValidUAI = function(uai) {
  if (!uai || uai.length !== 8) { return false; }
  var numericalPart = parseInt(uai.substring(0, 7));
  if (isNaN(numericalPart)) { return false; }
  var code = uai.substring(7);
  return code === UAI_ALPHABET.charAt(numericalPart % 23);
};

module.exports.slug = function(data) {
  return data ?
    removeAccents(data.trim()).toLowerCase()
    .replace(/ +/g, '_').replace(/'+/g, '') :
    '';
};