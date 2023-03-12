package com.restaurant.repository;

import com.restaurant.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {

    Page<Order> findByCategoryId(Long categoryId, Pageable pageable);

    Page<Order> findOrdersByOrderNameContaining(String name, Pageable pageable);

    @Query("select count (id) from Order where category.id=?1")
    Long getOrderLengthByCategoryId(Long id);


    @Query("select count (id) from Order where orderName like %?1%")
    Long getOrderLengthByKeySearch(String key);



}
