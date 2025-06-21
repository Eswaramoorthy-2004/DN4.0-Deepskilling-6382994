public class FinancialForecastRecursive {

    // Recursive method to calculate future value
    public static double forecast(int year, double initial, double rate) {
        if (year == 0) {
            return initial;
        }
        return forecast(year - 1, initial, rate) * (1 + rate);
    }

    public static void main(String[] args) {
        double initialValue = 10000; // Initial investment
        double growthRate = 0.05;    // 5% growth per year
        int years = 5;

        double futureValue = forecast(years, initialValue, growthRate);
        System.out.printf("Recursive Forecast: ₹%.2f after %d years\n", futureValue, years);
    }
}
