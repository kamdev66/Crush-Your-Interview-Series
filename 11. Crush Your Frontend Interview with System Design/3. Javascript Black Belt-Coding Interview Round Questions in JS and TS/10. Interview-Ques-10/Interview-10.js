function alternatingSums(a) {
  let team1weight = 0;
  let team2weight = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      team1weight += a[i];
    } else {
      team2weight += a[i];
    }
  }
  console.log(team1weight);
  console.log(team2weight);

  return [team1weight,team2weight]

}

// Test case
console.log(alternatingSums([50, 60, 60, 45, 70]));
