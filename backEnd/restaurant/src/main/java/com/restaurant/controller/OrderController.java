package com.restaurant.controller;


import com.restaurant.model.Order;
import com.restaurant.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/orders")
public class OrderController {

    private final OrderService orderService;

    // http://localhost:8080/api/v1/orders/all-orders
    @GetMapping("/all-orders")
    public List<Order> getAllOrders(){
        return orderService.getOrders();
    }


    // http://localhost:8080/api/v1/orders/category?categoryId={value}
    @GetMapping("/category")
    public List<Order> getOrderByCategoryId(@RequestParam Long categoryId){
       return orderService.getOrdersByCategoryId(categoryId);
    }

    // http://localhost:8080/api/v1/orders/search?name={value}
    @GetMapping("/search")
    public List<Order> getOrderByNameContain(@RequestParam String name){
        return orderService.getOrdersByNameContain(name);
    }


}
