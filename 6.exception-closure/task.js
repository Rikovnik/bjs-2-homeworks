//Задача_1
function parseCount(value) {
  if (isNaN(Number.parseInt(value))) {
    throw new Error('Невалидное значение');
  }
  return Number.parseInt(value);
};


function validateCount(value) {
  try {
    return parseCount(value);
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

    if ((this.a >= this.b + this.c)||(this.b >= this.a + this.c)||(this.c >= this.a + this.b)) {
      throw new Error('Треугольник с такими сторонами не существует')
    }    
  }

  getPerimeter() {    
      return(this.a + this.b + this.c);    
  }

  getArea() {
    let p = (this.a + this.b + this.c)/2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return(Number(area.toFixed(3)));    
  }
};

function getTriangle(a,b,c) {
  try {   
    return(new Triangle(a, b, c));
  }

 catch(e) {
    return({
      getPerimeter(){
        return('Ошибка! Треугольник не существует');
      },
      getArea(){
        return('Ошибка! Треугольник не существует');
      }
    });    
  }
}

  

