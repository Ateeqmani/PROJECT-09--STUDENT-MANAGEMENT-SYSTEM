#! /usr/bin/env node
class School {
    name;
    students = [];
    teachers = [];
    addStudents(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(techObj) {
        this.teachers.push(techObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("The Knowledge Public School");
let school2 = new School("Students Foundation Secondary School");
let s1 = new Student("Ateeq", 23, school1.name);
let s2 = new Student("Farman", 27, school2.name);
let s3 = new Student("Jansher", 30, school2.name);
let t1 = new Teacher("Sir Hamzah", 23, school1.name);
let t2 = new Teacher("Sir Zia", 60, school2.name);
let t3 = new Teacher("Sir Okashah", 23, school2.name);
// add student
school1.addStudents(s1);
school2.addStudents(s2);
school2.addStudents(s3);
//add teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
console.log(school1);
console.log(school2);
export {};
