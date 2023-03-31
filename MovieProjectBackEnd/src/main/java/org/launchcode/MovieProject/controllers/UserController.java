package org.launchcode.MovieProject.controllers;

import org.launchcode.MovieProject.data.UserRepository;
import org.launchcode.MovieProject.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://localhost:4200", maxAge = 3600)
@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("user")
    public ResponseEntity<?> getUserInformation (){
        List<User> users = (List<User>) userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @PostMapping("/add")
    void processUserInformationForm(@RequestBody User newUser){
            userRepository.save(newUser);
    }
}
