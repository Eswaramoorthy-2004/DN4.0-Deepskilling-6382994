import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Setup: Create a new Calculator before each test
        calculator = new Calculator();
        System.out.println("Setup: Calculator instance created");
    }

    @After
    public void tearDown() {
        // Teardown: Clean up after each test
        calculator = null;
        System.out.println("Teardown: Calculator instance cleared");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals("Addition result should be 5", 5, result);
        System.out.println("testAdd passed");
    }

    @Test
    public void testMultiply() {
        // Arrange
        int a = 4;
        int b = 5;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals("Multiplication result should be 20", 20, result);
        System.out.println("testMultiply passed");
    }
}
