import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equality
        assertEquals("Sum should be 5", 5, 2 + 3);

        // Assert true
        assertTrue("Should be true", 5 > 3);

        // Assert false
        assertFalse("Should be false", 5 < 3);

        // Assert null
        assertNull("Should be null", null);

        // Assert not null
        assertNotNull("Should not be null", new Object());

        // Print success message
        System.out.println("✅ All test cases passed successfully!");
    }
}
