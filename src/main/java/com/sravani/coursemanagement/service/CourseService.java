package com.sravani.coursemanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sravani.coursemanagement.entity.Course;
import com.sravani.coursemanagement.repository.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public Course addCourse(Course course) {

        if (courseRepository.existsById(course.getId())) {
            throw new RuntimeException("Course ID already exists");
        }

        if (course.getName() == null || course.getName().trim().isEmpty()) {
            throw new RuntimeException("Course Name cannot be empty");
        }

        if (course.getFee() <= 0) {
            throw new RuntimeException("Fee must be greater than 0");
        }

        return courseRepository.save(course);
    }

    public List<Course> getCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(int id) {
        return courseRepository.findById(id).orElse(null);
    }

    public String deleteCourse(int id) {
        courseRepository.deleteById(id);
        return "Course deleted successfully";
    }

    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> searchByName(String name) {
        return courseRepository.findByName(name);
    }

    public long getCourseCount() {
        return courseRepository.count();
    }
}