package com.restaurant.service;

import com.restaurant.model.Order;
import com.restaurant.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;


//    public List<Order> getOrders(){
//        return orderRepository.findAll();
//    }

    public List<Order> getOrders(int page, int size){
        Pageable pageable = PageRequest.of(page,size);
        return orderRepository.findAll(pageable).getContent();
    }

    public List<Order> getOrdersByCategoryId(Long categoryId,int page, int size){
        Pageable pageable = PageRequest.of(page,size);
        return orderRepository.findByCategoryId(categoryId,pageable).getContent();
    }

    public List<Order> getOrdersByNameContain(String name,int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return orderRepository.findOrdersByOrderNameContaining(name,pageable).getContent();
    }


    public Order getOrderById(Long id){
        return orderRepository.findById(id).get();
    }


    public Long getAllOrdersSize(){
        return orderRepository.count();
    }

    public Long getOrderByCategoryIdLength(Long id){
        return orderRepository.getOrderLengthByCategoryId(id);
    }


    public Long getOrderByKeyLength(String key){
        return orderRepository.getOrderLengthByKeySearch(key);
    }

}
