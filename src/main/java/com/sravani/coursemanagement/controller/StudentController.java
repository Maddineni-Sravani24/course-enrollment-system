package com.sravani.coursemanagement.Student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sravani.coursemanagement.entity.Student;
import com.sravani.coursemanagement.service.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
    public String deleteStudent(@PathVariable int id) {
        return service.deleteStudent(id);
    }

    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        return service.updateStudent(student);
    }

    @GetMapping("/searchStudentByName/{name}")
    public List<Student> searchStudentByName(@PathVariable String name) {
        return service.searchByName(name);
    }

    @GetMapping("/studentCount")
    public long getStudentCount() {
        return service.getStudentCount();
    }
}