package com.sravani.coursemanagement.repository;

import java.util.List;

import com.sravani.coursemanagement.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {

    List<Course> findByName(String name);


    List<Course> findByFee(double fee);
}