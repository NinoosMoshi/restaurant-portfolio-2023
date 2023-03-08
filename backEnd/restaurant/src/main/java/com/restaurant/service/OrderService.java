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

}
