import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}

public class EcommerceSearch {

    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int result = products[mid].productName.compareToIgnoreCase(name);

            if (result == 0) return products[mid];
            else if (result < 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shoes", "Fashion"),
                new Product(3, "Watch", "Accessories"),
                new Product(4, "Phone", "Electronics")
        };

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter product name to search: ");
        String inputName = sc.nextLine();

        // Linear Search
        Product foundLinear = linearSearch(products, inputName);
        System.out.println("Linear Search Result: " + (foundLinear != null ? foundLinear : "Product not found"));

        // Binary Search (after sorting)
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        Product foundBinary = binarySearch(products, inputName);
        System.out.println("Binary Search Result: " + (foundBinary != null ? foundBinary : "Product not found"));
    }
}
