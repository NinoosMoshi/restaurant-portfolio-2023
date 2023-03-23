package com.restaurant.service;

import com.restaurant.model.City;
import com.restaurant.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CityService {

    private final CityRepository cityRepository;


    public List<City> getAllCities(){
        return cityRepository.findAll();
    }


    public List<City> getCitiesByStateCode(String code){
        return cityRepository.findByStateStateCode(code);
    }


}
