package com.sravani.coursemanagement.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.sravani.coursemanagement.entity.Student;
import java.util.List;

public interface StudentRepository extends JpaRepository<Student,Integer> {


    List<Student> findByName(String name);

}