
public class Truck extends Car {
    int weight;

    public Truck(String name, int speed, double regularPrice, String color, int weight) {
        super(name, speed, regularPrice, color);
        this.weight = weight;

    }

    @Override
    public void getSalePrice() {
        if (weight > 2000) {
            double salePrice = regularPrice - (regularPrice * 0.10);
            System.out.println("discount price for " + this.name + " is " + salePrice);
        } else {
            double salePrice = regularPrice - (regularPrice * 0.20);
            System.out.println("discount price for " + this.name + " is " + salePrice);
        }
    }

    public String toString() {
        return this.name + ", speed: " + this.speed + ", price: " + this.regularPrice + ", color: " + this.color
                + ", weight: " + this.weight;
    }
}
