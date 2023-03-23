package com.restaurant.controller;

import com.restaurant.model.City;
import com.restaurant.service.CityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/v1/cities")
public class CityController {

    private final CityService cityService;

    // http://localhost:8080/api/v1/cities/all-cities
    @GetMapping("/all-cities")
    public List<City> getCities(){
        return cityService.getAllCities();
    }


    // http://localhost:8080/api/v1/cities/city-code?code={value}
    @GetMapping("/city-code")
    public List<City> getAllCitiesByStateCode(@RequestParam String code){
        return cityService.getCitiesByStateCode(code);
    }



}
