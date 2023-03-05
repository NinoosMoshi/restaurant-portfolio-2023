package com.restaurant.service;

import com.restaurant.model.Category;
import com.restaurant.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<Category> allCategories(){
        return categoryRepository.findAll();
    }


}
