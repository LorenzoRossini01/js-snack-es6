const students = [
  { id: 213, name: "Marco della Rovere", grades: 78 },
  { id: 110, name: "Paola Cortellessa", grades: 96 },
  { id: 250, name: "Andrea Mantegna", grades: 48 },
  { id: 145, name: "Gaia Borromini", grades: 74 },
  { id: 196, name: "Luigi Grimaldello", grades: 68 },
  { id: 102, name: "Piero della Francesca", grades: 50 },
  { id: 120, name: "Francesca da Polenta", grades: 84 },
];

console.table(students);

const studentsUppercase = students.map((student, index) =>
  student.name.toUpperCase()
);

console.table(studentsUppercase);

const students70 = students.filter((student) => student.grades >= 70);
console.table(students70);

const students70120 = students70.filter((student) => student.id >= 120);
console.table(students70120);
