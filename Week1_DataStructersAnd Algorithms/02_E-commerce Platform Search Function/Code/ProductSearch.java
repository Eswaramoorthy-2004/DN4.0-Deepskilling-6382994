import java.util.Arrays;
import java.util.Comparator;

public class ProductSearch {

    // Linear Search by productName
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search by productName
    public static Product binarySearch(Product[] products, String name) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int result = products[mid].productName.compareToIgnoreCase(name);
            if (result == 0) {
                return products[mid];
            } else if (result < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shirt", "Clothing"),
                new Product(103, "Book", "Education"),
                new Product(104, "Camera", "Electronics"),
                new Product(105, "Shoes", "Footwear")
        };

        // Linear Search
        Product result1 = linearSearch(products, "Camera");
        System.out.println("Linear Search Result: " + result1);

        // Sort products for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        Product result2 = binarySearch(products, "Camera");
        System.out.println("Binary Search Result: " + result2);
    }
}
