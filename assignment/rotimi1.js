// An array of student objects

const students = [
  { name: 'Debo', age: 20, grade: 'A' },
  { name: 'Deborah', age: 22, grade: 'B' },
  { name: 'Oyekanmi', age: 23, grade: 'A' },
  { name: 'Segun', age: 21, grade: 'C' },
  { name: 'Funmi', age: 19, grade: 'B' },
  {name: 'chukwuma', age: 24, grade: 'C'}
];

// Function to filter students by grade

const filterByGrade = (students, grade) => {
  return students.filter(student => student.grade === grade);
}

// Function to calculate the average age of students

const averageAge = (students) => {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// Example usage

const gradeAStudents = filterByGrade(students, 'A');
const avgAge = averageAge(students);

console.log('Students with grade A:', gradeAStudents);
console.log('Average age of students:', avgAge);

/*
console.log('Students with grade A:', filterByGrade(students, 'A'));
console.log('Average age of students:', averageAge(students));
*/