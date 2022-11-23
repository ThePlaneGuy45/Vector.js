#VectorJS
A simple vector math framework for Javascript
***
How to use:
```html
<!DOCTYPE html>
<head>
  <!-- Import VectorJS -->
  <script src="./vector_min.js"></script>
  <script src="./youscript.js"></script>
</head>
<body></body>
```
***
Javascript Syntax:
```js
/* Initialization */
var vector = new Vector3( 1, 2, 3 ); // Can also be vector3, Vec3, vec3

/* Sizzling */
console.log(
  vector.xy()  // REMEMBER THE ()
);

/* Vector Math */
console.log(
  vector.add(new Vector3(1, 1, 1)
);

/* Array & Strings */
console.log(
  vector.toArray() // Converts vec2/vec3 to array
)
var array = [1, 2, 3]
console.log(
  array.toVector() // Converts array to vec2/vec3
)
console.log(
  vector.toString() // Converts vector to string with format (x, y)/(x, y, z)
)
```
Note: Cross Products & Vector Reflection are ONLY for Vector3
