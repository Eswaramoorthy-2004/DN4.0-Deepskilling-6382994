-- Enable DBMS output
SET SERVEROUTPUT ON;

-- DROP tables if they already exist (optional if re-running)
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Loans';
  EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
  WHEN OTHERS THEN NULL; -- ignore errors if tables don't exist
END;
/

-- Create Customers table
CREATE TABLE Customers (
    CustomerID    NUMBER PRIMARY KEY,
    Name          VARCHAR2(50),
    Age           NUMBER,
    Balance       NUMBER(10,2),
    IsVIP         VARCHAR2(5)
);

-- Create Loans table
CREATE TABLE Loans (
    LoanID        NUMBER PRIMARY KEY,
    CustomerID    NUMBER REFERENCES Customers(CustomerID),
    DueDate       DATE,
    InterestRate  NUMBER(5,2)
);

-- Insert sample data
INSERT INTO Customers VALUES (1, 'John Doe', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Jane Smith', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Alice Johnson', 70, 20000, 'FALSE');

INSERT INTO Loans VALUES (101, 1, SYSDATE + 10, 7.5);
INSERT INTO Loans VALUES (102, 2, SYSDATE + 40, 6.9);
INSERT INTO Loans VALUES (103, 3, SYSDATE + 20, 8.0);

COMMIT;
BEGIN
  FOR rec IN (
    SELECT l.LoanID
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE c.Age > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE LoanID = rec.LoanID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('Discount applied to eligible senior customers.');
END;
/

BEGIN
  FOR rec IN (SELECT CustomerID FROM Customers WHERE Balance > 10000) LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('VIP status updated based on balance.');
END;
/

BEGIN
  FOR rec IN (
    SELECT c.Name, l.DueDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan due for ' || rec.Name || ' on ' || TO_CHAR(rec.DueDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
/
