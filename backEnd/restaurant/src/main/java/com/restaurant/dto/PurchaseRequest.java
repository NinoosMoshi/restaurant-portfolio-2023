package com.restaurant.dto;

import com.restaurant.model.form.Address;
import com.restaurant.model.form.Customer;
import com.restaurant.model.form.Item;
import com.restaurant.model.form.Request;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class PurchaseRequest {

    private Customer customer;
    private Request requestOrder;
    private List<Item> items = new ArrayList<>();
    private Address fromAddress;
    private Address toAddress;
}
