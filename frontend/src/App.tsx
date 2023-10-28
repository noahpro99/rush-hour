import { Graph } from "./Graph";
import { Grid } from "./Grid";

function carsToGrid(cars: number[][][]): string[][] {
  let grid: string[][] = []

  for (let i = 0; i < 6; i++) {
    grid.push([])
    for (let j = 0; j < 6; j++) {
      grid[i].push('white')
    }
  }

  for (let car of cars) {
    for (let coord of car) {
      grid[coord[0]][coord[1]] = 'red'
    }
  }

  return grid
}

// function to take a cars list and convert it to a id using a hash
function carsToId(cars: number[][][]): number {
  let id = 0
  let hash = 1

  for (let car of cars) {
    for (let coord of car) {
      id += coord[0] * hash + coord[1] * hash * hash
      hash *= 100
    }
  }

  return id
}

function App() {

  let prevState = [
    [[0, 1], [0, 2]],
    [[3, 0], [4, 0]],
  ]
  let cars = [
    [[0, 0], [0, 1]],
    [[3, 0], [4, 0]],
  ]

  let state = carsToId(cars)
  let states = [carsToId(prevState), carsToId(cars)]
  let stateTransitions = [[carsToId(prevState), carsToId(cars)]]
  let grid = carsToGrid(cars)

  return (
    // tailwind that splits the screen into 2 columns
    <div className="grid grid-cols-2 min-h-screen">
      <Grid grid={grid} />
      <Graph state={state} states={states} stateTransitions={stateTransitions} />
    </div >
  );
}

export default App;