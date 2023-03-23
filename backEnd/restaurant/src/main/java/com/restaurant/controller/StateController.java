package com.restaurant.controller;

import com.restaurant.model.State;
import com.restaurant.service.StateService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/v1/states")
public class StateController {

    private final StateService stateService;

    // http://localhost:8080/api/v1/states/all-states
    @GetMapping("all-states")
    public List<State> getStates(){
        return stateService.getAllStates();
    }


}
