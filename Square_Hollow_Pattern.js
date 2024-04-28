for (let i = 0; i < 7; i++) {
  let row = "";
  for (let j = 0; j < 6; j++) {
    if (i === 0 || i === 6) {
      row += " *";
    } else if (j === 0 || j === 5) {
      row += " *";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
