-- Scenario 2:Promote Customers to VIP Status Based on Balance
BEGIN
    FOR cust IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;
END;
/
