// Main.java
public class Main {
    public static void main(String[] args) {
        // Get logger instance 1
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        // Get logger instance 2
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        // Verify both logger references point to the same object
        if (logger1 == logger2) {
            System.out.println("Only one instance of Logger exists.");
        } else {
            System.out.println("Different instances of Logger exist.");
        }
    }
}
