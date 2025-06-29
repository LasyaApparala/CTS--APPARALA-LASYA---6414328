-- Scenario 3:Send Reminders to Customers Whose Loans are Due within the Next 30 Days
BEGIN
    FOR loan IN (SELECT CustomerID, LoanID, LoanAmount FROM Loans WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || loan.LoanID || ' for customer ' || loan.CustomerID || ' is due soon.');
    END LOOP;
END;
/
