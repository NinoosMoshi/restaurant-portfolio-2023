package com.restaurant.controller;

import com.restaurant.model.Category;
import com.restaurant.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/categories")
public class CategoryController {

    private final CategoryService categoryService;

    // http://localhost:8080/api/v1/categories/all-categories
    @GetMapping("/all-categories")
    public List<Category> getAllCategories(){
        return categoryService.allCategories();
    }

}
