-- Drop existing tables if they exist
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Accounts';
  EXECUTE IMMEDIATE 'DROP TABLE Employees';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create Accounts table
CREATE TABLE Accounts (
    AccountID    NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType  VARCHAR2(20),  -- e.g., 'Savings'
    Balance      NUMBER(10,2)
);

-- Create Employees table
CREATE TABLE Employees (
    EmpID        NUMBER PRIMARY KEY,
    EmpName      VARCHAR2(50),
    Department   VARCHAR2(30),
    Salary       NUMBER(10,2)
);

-- Insert sample data
INSERT INTO Accounts VALUES (1, 'John Doe', 'Savings', 10000);
INSERT INTO Accounts VALUES (2, 'Alice Smith', 'Savings', 15000);
INSERT INTO Accounts VALUES (3, 'Bob Martin', 'Current', 8000);

INSERT INTO Employees VALUES (101, 'Jane Manager', 'HR', 50000);
INSERT INTO Employees VALUES (102, 'Tom Dev', 'IT', 40000);
INSERT INTO Employees VALUES (103, 'Sara Dev', 'IT', 45000);

COMMIT;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'Savings') LOOP
    UPDATE Accounts
    SET Balance = Balance + (acc.Balance * 0.01)
    WHERE AccountID = acc.AccountID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/
BEGIN
  ProcessMonthlyInterest;
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * bonus_percent / 100)
  WHERE Department = dept_name;

  DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || dept_name);
END;
/
BEGIN
  UpdateEmployeeBonus('IT', 10);  -- 10% bonus for IT dept
END;
/

CREATE OR REPLACE PROCEDURE TransferFunds (
  from_account IN NUMBER,
  to_account IN NUMBER,
  amount IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  -- Get source balance
  SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_account FOR UPDATE;

  IF from_balance < amount THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient funds in source account.');
  ELSE
    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = from_account;

    -- Add to target
    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = to_account;

    DBMS_OUTPUT.PUT_LINE('Transfer successful.');
  END IF;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('One of the accounts does not exist.');
END;
/
BEGIN
  TransferFunds(1, 2, 1000);  -- Transfer 1000 from Account 1 to 2
END;
/

