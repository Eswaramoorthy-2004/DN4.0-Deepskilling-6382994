public class FinancialForecastItterative {

    public static double forecast(int year, double initial, double rate) {
        double value = initial;
        for (int i = 1; i <= year; i++) {
            value *= (1 + rate);
        }
        return value;
    }

    public static void main(String[] args) {
        double initialValue = 10000;
        double growthRate = 0.05;
        int years = 30;

        double futureValue = forecast(years, initialValue, growthRate);
        System.out.printf("Iterative Forecast: ₹%.2f after %d years\n", futureValue, years);
    }
}
