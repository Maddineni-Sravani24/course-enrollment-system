package com.sravani.coursemanagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sravani.coursemanagement.entity.Course;
import com.sravani.coursemanagement.service.CourseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CoursemanagementController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/addCourse")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @GetMapping("/getCourses")
    public List<Course> getCourses() {
        return courseService.getCourses();
    }

    @GetMapping("/getCourse/{id}")
    public Course getCourseById(@PathVariable int id) {
        return courseService.getCourseById(id);
    }

    @DeleteMapping("/deleteCourse/{id}")
    public String deleteCourse(@PathVariable int id) {
        return courseService.deleteCourse(id);
    }

    @PutMapping("/updateCourse")
    public Course updateCourse(@RequestBody Course course) {
        return courseService.updateCourse(course);
    }

    @GetMapping("/searchByName/{name}")
    public List<Course> searchByName(@PathVariable String name) {
        return courseService.searchByName(name);
    }

    @GetMapping("/searchByFee/{fee}")
public List<Course> searchByFee(@PathVariable double fee) {
    return courseService.searchByFee(fee);
}
}