{
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
type circle ={
    shape: 'circle';
    radius: number;

}
type Rectangle ={
    shape:'rectangle';
    width: number;
    height: number;
}
// now make union type
  type Shape = circle | Rectangle;

  function calculateShapeArea(shape:Shape):number{
    if (shape.shape==='circle') {
        return Math.PI * shape.radius ** 2;
    } 
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height; 
    }
      return 0;
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
//   console.log(circleArea);
  const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
//   console.log(rectangleArea);

}