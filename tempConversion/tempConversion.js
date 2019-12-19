const ftoc = function(f) {
 return Math.round((f - 32) *(5/9) *10) / 10;
}
const ctof = function(c) {
  return Math.round(((c* 9/5) + 32) * 10) / 10;
}

// round to one decimal is result.toFixed(1)

module.exports = {
  ftoc,
  ctof
}
