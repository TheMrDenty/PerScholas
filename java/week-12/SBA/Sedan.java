
public class Sedan extends Car {
    int length;

    public Sedan(String name, int speed, double regularPrice, String color, int length) {
        super(name, speed, regularPrice, color);
        this.length = length;
    }

    @Override
    public void getSalePrice() {
        if (length > 20) {
            double salePrice = regularPrice - (regularPrice * 0.5);
            System.out.println("discount price for " + this.name + " is " + salePrice);
        } else {
            double salePrice = regularPrice - (regularPrice * 0.10);
            System.out.println("discount price for " + this.name + " is " + salePrice);
        }
    }

    @Override
    public String toString() {
        return this.name + ", speed: " + this.speed + ", price: " + this.regularPrice + ", color: " + this.color
                + ", length: " + this.length;
    }
}
