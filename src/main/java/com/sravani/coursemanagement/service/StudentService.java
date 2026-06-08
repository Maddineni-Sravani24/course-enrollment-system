package com.sravani.coursemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sravani.coursemanagement.entity.Student;
import com.sravani.coursemanagement.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public Student addStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getStudents() {
        return repository.findAll();
    }

    public String deleteStudent(int id) {
        repository.deleteById(id);
        return "Student Deleted Successfully";
    }

    public Student updateStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> searchByName(String name) {
        return repository.findByName(name);
    }

    public long getStudentCount() {
        return repository.count();
    }
    
}