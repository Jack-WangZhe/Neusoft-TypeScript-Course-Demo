enum Direction1 {
    NORTH,
    SOUTH,
    EAST,
    WEST,
  }
  
  let dir1: Direction1 = Direction1.NORTH;
  console.log(dir1); // 0
  console.log(Direction1.SOUTH); // 1


  enum Direction2 {
    NORTH = 3,
    SOUTH,
    EAST,
    WEST,
  }

  let dir2: Direction2 = Direction2.NORTH;
  console.log(dir2); // 3
  console.log(Direction2.SOUTH); // 4  
  
  
  enum Direction3 {
    NORTH,
    SOUTH = 9,
    EAST,
    WEST,
  }

  let dir3: Direction3 = Direction3.NORTH;
  console.log(dir3); // 0
  console.log(Direction3.SOUTH); // 9
  console.log(Direction3.EAST); // 10