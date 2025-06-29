--Scenario 1: Apply a Discount to Loan Interest Rates for Customers Above 60 Years Old
BEGIN
    FOR cust IN (SELECT CustomerID, Age, LoanInterestRate FROM Customers) LOOP
        IF cust.Age > 60 THEN
            UPDATE Customers
            SET LoanInterestRate = LoanInterestRate - 1
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;
END;
/
