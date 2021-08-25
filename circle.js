/* 
  tek fonksyion ilede hesaplanır ödevde istenileni yapmak için iki fonksyion kullandım
function duplicateCompute(r) {
  const pi = 3.14;
  const Area = pi * r * r;
  console.log("Area :"+Area);
  const Circumference = 2 * pi * r;
  console.log("Circumference :"+Circumference);
} */

function circleArea(r) {
  const pi = 3.14;
  const result = pi * r * r;
}

function circleCircumference(r) {
  const pi = 3.14;
  const result = 2 * pi * r;
  console.log(result);
}
circleArea(4);
circleCircumference(4);

module.exports = {
  circleArea,
  circleCircumference,
};
