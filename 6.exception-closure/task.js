//Задача_1
function parseCount(value) {
  const parseValue = Number.parseInt(value);
  if (isNaN(parseValue)) {
    throw new Error('Невалидное значение');
  }
  return parseValue;
};


function validateCount(value) {
  try {
    parseCount(value);
  } catch (e){
    return(e);
  }
};

//Задача_2

class Triangle {

  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  checkTriangle() {
    if ((this.a >= this.b + this.c)||(this.b >= this.a + this.c)||(this.c >= this.a + this.b)) {
      throw new Error('Ошибка! Треугольник не существует')
    }
  }

  getPerimeter() {
    return(this.a + this.b + this.c)
  }

  getArea () {
    let p = this.a + this.b + this.c;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return(Number(area.toFixed(3)))
  }
}

function getTriangle(a,b,c) {
  const triangle = new Triangle(a,b,c);
  try { 
    triangle.check();
    return(triangle);
  }
  catch(e) {
    return(e)
  }
}

  

