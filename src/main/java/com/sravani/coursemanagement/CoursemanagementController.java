package com.sravani.coursemanagement;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sravani.coursemanagement.entity.Course;
import com.sravani.coursemanagement.service.CourseService;

@CrossOrigin(origins = "*")
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
    public Course getCourse(@PathVariable int id) {
        return courseService.getCourseById(id);
    }

    @PutMapping("/updateCourse")
    public Course updateCourse(@RequestBody Course course) {
        return courseService.updateCourse(course);
    }

    @DeleteMapping("/deleteCourse/{id}")
    public String deleteCourse(@PathVariable int id) {
        return courseService.deleteCourse(id);
    }

    @GetMapping("/searchByName/{name}")
    public List<Course> searchByName(@PathVariable String name) {
        return courseService.searchByName(name);
    }

    @GetMapping("/courseCount")
    public long getCourseCount() {
        return courseService.getCourseCount();
    }
}