function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]
    } else {
      this.marks.push(mark)
    }
};

Student.prototype.addMarks = function (... mark) {
  if(this.marks === undefined){ 
    this.marks = [... mark];
    } else {
      this.marks.push(...mark)
    }
};

Student.prototype.getAverage = function (marks) {
  let sum = 0;
  for(let i in this.marks) {
  sum = sum + this.marks[i]
  }
  
  return getAverage = sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  this.excluded  = reason;
  delete this.marks;
  delete this.subject;
};
