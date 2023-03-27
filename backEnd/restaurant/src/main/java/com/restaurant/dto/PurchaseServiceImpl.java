package com.restaurant.dto;

import com.restaurant.model.form.Item;
import com.restaurant.model.form.Request;
import com.restaurant.repository.CustomerRepository;
import com.restaurant.util.UserCode;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Service
public class PurchaseServiceImpl implements PurchaseService{

    private final CustomerRepository customerRepository;


    @Transactional
    @Override
    public PurchaseResponse addRequestOrder(PurchaseRequest purchaseRequest) {

        Request requestOrder = purchaseRequest.getRequestOrder();

        String myCode = UserCode.getCode();
        requestOrder.setCode(myCode);

        List<Item> items = purchaseRequest.getItems();
        items.forEach(item -> requestOrder.addItem(item));

        requestOrder.setFromAddress(purchaseRequest.getFromAddress());
        requestOrder.setToAddress(purchaseRequest.getToAddress());

        purchaseRequest.getCustomer().addRequestOrder(requestOrder);

        customerRepository.save(purchaseRequest.getCustomer());
        return new PurchaseResponse(purchaseRequest.getCustomer().getFullName(),myCode);
    }
}
