package com.sravani.coursemanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sravani.coursemanagement.entity.Student;
import com.sravani.coursemanagement.service.StudentService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @GetMapping("/getStudents")
    public List<Student> getStudents() {
        return service.getStudents();
    }

    @DeleteMapping("/deleteStudent/{id}")
    public void deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
    }
    @DeleteMapping("/deleteStudent/{id}")
public String deleteStudent(@PathVariable int id) {
    return studentService.deleteStudent(id);
}

@PutMapping("/updateStudent")
public Student updateStudent(@RequestBody Student student) {
    return studentService.updateStudent(student);
}

@GetMapping("/searchStudentByName/{name}")
public List<Student> searchStudentByName(
        @PathVariable String name) {

    return studentService.searchByName(name);
}
}