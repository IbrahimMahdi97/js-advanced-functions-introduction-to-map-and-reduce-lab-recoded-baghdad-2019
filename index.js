// Your code here
function mapToNegativize(def) {
  let v = []
  for (let i = 0; i < def.length; i++ ) {
    v.push(-1 * def[i])
  }
  return v
}

function mapToNoChange(def) {
  let v = []
  for (let i = 0; i < def.length; i++ ) {
    v.push(def[i])
  }
  return v
}

function mapToDouble(def) {
  let v = []
  for (let i = 0; i < src.length; i++ ) {
    v.push(2 * def[i])
  }
  return v
}

function mapToSquare(def) {
  let v = []
  for (let i = 0; i < def.length; i++ ) {
    v.push(def[i] * src[i])
  }
  return v
}

function reduceToTotal(def, startPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}
