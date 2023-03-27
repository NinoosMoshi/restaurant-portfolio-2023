package com.restaurant.controller;

import com.restaurant.dto.PurchaseRequest;
import com.restaurant.dto.PurchaseResponse;
import com.restaurant.dto.PurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/buy")
public class PurchaseController {

    private final PurchaseService purchaseService;

    // http://localhost:8080/api/v1/buy/purchase
    @PostMapping("/purchase")
    public PurchaseResponse addRequestOrder(@RequestBody PurchaseRequest purchaseRequest){
        return purchaseService.addRequestOrder(purchaseRequest);
    }


}
