
public class Main {

    public static void main(String[] args) {
        Car carObj = new Car("car", 5, 10000, "blue");
        Truck lightTruckObj = new Truck("light truck", 4, 12000, "red", 1800);
        Truck heavyTruckObj = new Truck("heavy truck", 3, 13000, "green", 2400);
        Ford fordObj = new Ford("ford", 4, 11000, "orange", 2023, 0.15);
        Sedan shortSedanObj = new Sedan("short sedan", 6, 8500, "white", 18);
        Sedan longSedanObj = new Sedan("long sedan", 7, 9000, "yellow", 21);
        System.out.println(carObj.toString());
        System.out.println(lightTruckObj.toString());
        System.out.println(heavyTruckObj.toString());
        System.out.println(fordObj.toString());
        System.out.println(shortSedanObj.toString());
        System.out.println(longSedanObj.toString());

        carObj.getSalePrice();
        lightTruckObj.getSalePrice();
        heavyTruckObj.getSalePrice();
        fordObj.getSalePrice();
        shortSedanObj.getSalePrice();
        longSedanObj.getSalePrice();

    }
}
