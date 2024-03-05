function addBorder(wall) {
  const width=wall[0]?.length+2;
  console.log(width)
  const border="*".repeat(width);
  console.log(border)

  const borderedWall=wall?.map(str=>`*${str}*`);
  console.log(borderedWall);

  borderedWall.unshift(border);
  console.log(borderedWall);

  borderedWall.push(border);
  console.log(borderedWall);
 
  return borderedWall

}

console.log(addBorder(["abc", "def"]));