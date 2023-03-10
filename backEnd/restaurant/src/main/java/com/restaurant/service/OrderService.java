package com.restaurant.service;

import com.restaurant.model.Order;
import com.restaurant.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;


    public List<Order> getOrders(){
        return orderRepository.findAll();
    }

    public List<Order> getOrdersByCategoryId(Long categoryId){
        return orderRepository.findByCategoryId(categoryId);
    }

    public List<Order> getOrdersByNameContain(String name){
        return orderRepository.findOrdersByOrderNameContaining(name);
    }


    public Order getOrderById(Long id){
        return orderRepository.findById(id).get();
    }



}
