const express = require('express');
const students = require('../models/studentmodel');
const studentRouter = express.Router();

let subjects = ['Programming', 'Math', 'Physics', 'Javascript'];

studentRouter.post('/', (req, res) => {
    let { name, lastName, gender, id, address, subject, grade } = req.body; // Request body of json

    if (!subjects.includes(subject)) {
        // Bad request client error response ((400))
        // Return to stop the execution
       return res.status(400).json({message: 'Materia inválida.'});
    }

    let student = {
        name,
        lastName,
        gender,
        id,
        address,
        subject,
        grade
    };
    console.log(student.type())
    students.push(student);
    //'The request succeeded, and a new resource was created as a result' ((status 201 for post)).
    res.status(201).json({message: 'Estudiante registrado correctamente', student});
});


// Get student info 
// The resource has been fetched ((status 200 for get))
studentRouter.get('/', (_,res) => {
    res.status(200).json(students);
});


// Find student by:   /students/respectiveid
studentRouter.get('/:id', (req, res) => {
    let findStudent = req.params.id; //Request parameter (id)
    let student = students.find(student => student.id === findStudent);
    if(!student) {
        return res.status(404).json({message: 'Estudiante no encontrado.'});
    }
    else {
        res.status(200).json(student);
    }
})

// Find students by subject /students/subject/NameOfTheSubject
studentRouter.get('/subject/:subject', (req, res) => {
    let findBySubject = req.params.subject;
    let studentsSubject = students.filter(student => student.subject.includes(findBySubject));
    if(studentsSubject.length === 0) {
        return res.status(404).json({message: 'No hay estudiantes registrados en esa materia.'});
    }
    else {
        res.status(200).json(studentsSubject);
    }
});

// Update info with put
studentRouter.put('/:name', (req, res) => {
    let studentName = req.params.name;
    let studentData = req.body;
    let studentIndex = students.findIndex(student => student.name === studentName);

    if (studentIndex === -1) {
        return res.status(404).json({ message: 'No existe estudiante registrado con ese nombre.' });
    }

    let updatedStudent = students[studentIndex];
        for (let check in studentData) {
            // Check if any param isnt null with hasOwnProperty method
            if (studentData.hasOwnProperty(check)) {
                // Check if the subject is one of the options
                if (check === 'subject' && !subjects.includes(studentData[check])) {
                    return res.status(400).json({message: 'Materia inválida.' });
                }
                // Update student if everything is ok
                updatedStudent[check] = studentData[check];
            }
        }

        // Update list and show message
        students[studentIndex] = updatedStudent;
        res.status(200).json({message: 'Información actualizada correctamente.', student: students[studentIndex] });
});

module.exports = studentRouter;

