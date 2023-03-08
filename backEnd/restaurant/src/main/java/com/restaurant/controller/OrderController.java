package com.restaurant.controller;


import com.restaurant.model.Order;
import com.restaurant.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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


}
