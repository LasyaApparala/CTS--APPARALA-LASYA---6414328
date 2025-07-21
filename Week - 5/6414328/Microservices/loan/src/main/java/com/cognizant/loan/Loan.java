package com.cognizant.loan;

public class Loan {
    private String loanNumber;
    private String customerName;
    private String loanType;
    private double loanAmount;

    public Loan(String loanNumber, String customerName, String loanType, double loanAmount) {
        this.loanNumber = loanNumber;
        this.customerName = customerName;
        this.loanType = loanType;
        this.loanAmount = loanAmount;
    }

    // Getters and Setters
    public String getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(String loanNumber) {
        this.loanNumber = loanNumber;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }
}
