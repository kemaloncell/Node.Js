const arguments = process.argv.slice(2)
function computeArea(r) {
  const pi = 3.14;
  const result = pi * r * r
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${result}`)
}

computeArea(arguments[0]*1);