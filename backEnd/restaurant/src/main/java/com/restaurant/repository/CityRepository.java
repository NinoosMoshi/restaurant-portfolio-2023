package com.restaurant.repository;

import com.restaurant.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City, Long> {

     List<City> findByStateStateCode(String code);

}
