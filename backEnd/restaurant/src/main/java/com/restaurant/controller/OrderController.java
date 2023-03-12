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
//    @GetMapping("/all-orders")
//    public List<Order> getAllOrders(){
//        return orderService.getOrders();
//    }

    // http://localhost:8080/api/v1/orders/all-orders?page={value}&size={value}
    @GetMapping("/all-orders")
    public List<Order> getAllOrders(@RequestParam int page, @RequestParam int size){
        return orderService.getOrders(page,size);
    }





    // http://localhost:8080/api/v1/orders/category?categoryId={value}&page={value}&size={value}
    @GetMapping("/category")
    public List<Order> getOrderByCategoryId(@RequestParam Long categoryId, @RequestParam int page, @RequestParam int size){
       return orderService.getOrdersByCategoryId(categoryId, page, size);
    }

    // http://localhost:8080/api/v1/orders/search?name={value}&page={value}&size={value}
    @GetMapping("/search")
    public List<Order> getOrderByNameContain(@RequestParam String name, @RequestParam int page, @RequestParam int size){
        return orderService.getOrdersByNameContain(name, page, size);
    }

    // http://localhost:8080/api/v1/orders/order?orderId={value}
    @GetMapping("/order")
    public Order getOrderById(@RequestParam Long orderId){
        return orderService.getOrderById(orderId);
    }


    // http://localhost:8080/api/v1/orders/order-size
    @GetMapping("/order-size")
    public Long orderSize(){
        return orderService.getAllOrdersSize();
    }


    // http://localhost:8080/api/v1/orders/category-size?id={value}
    @GetMapping("/category-size")
    public Long getOrderByCategorySize(@RequestParam Long id){
        return orderService.getOrderByCategoryIdLength(id);
    }


    // http://localhost:8080/api/v1/orders/key-size?key={value}
    @GetMapping("/key-size")
    public Long getOrderByKeySize(@RequestParam String key){
        return orderService.getOrderByKeyLength(key);
    }




}
