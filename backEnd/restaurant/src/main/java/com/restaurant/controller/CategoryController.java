package com.restaurant.controller;

import com.restaurant.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/categories")
public class CategoryController {

    private final CategoryService categoryService;



}
