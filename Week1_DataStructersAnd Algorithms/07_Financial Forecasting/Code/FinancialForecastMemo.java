public class FinancialForecastMemo {

    static double[] memo;

    public static double forecast(int year, double initial, double rate) {
        if (year == 0) return initial;
        if (memo[year] != 0) return memo[year];

        memo[year] = forecast(year - 1, initial, rate) * (1 + rate);
        return memo[year];
    }

    public static void main(String[] args) {
        double initialValue = 10000;
        double growthRate = 0.05;
        int years = 30;

        memo = new double[years + 1];
        double futureValue = forecast(years, initialValue, growthRate);
        System.out.printf("Memoized Forecast: ₹%.2f after %d years\n", futureValue, years);
    }
}
