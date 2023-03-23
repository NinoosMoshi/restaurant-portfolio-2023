package com.restaurant.service;

import com.restaurant.model.State;
import com.restaurant.repository.StateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StateService {

    private final StateRepository stateRepository;


    public List<State> getAllStates(){
       return stateRepository.findAll();
    }


}
