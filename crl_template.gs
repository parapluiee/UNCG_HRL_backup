function main() {
  buildings = ["Phillips-Hawkins Res. Hall"]
  id = '1l3OGIeqQ-O__G-dseQVHhyp8bnSNxXZrrQWd0thx7_E'
  let pull = CrlPull.newCrlPull(buildings, id);
  pull.pullFromHallChart()
}

