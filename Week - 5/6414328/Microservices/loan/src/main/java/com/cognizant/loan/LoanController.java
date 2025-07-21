package com.cognizant.loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoanController {
    @GetMapping("/{loanNumber}")
    public Loan getLoanDetails(@PathVariable String loanNumber) {
        return new Loan(loanNumber, "John Doe", "Home Loan", 200000.0);
    }
}

