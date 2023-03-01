
public class Car {
    String name;
    int speed;
    double regularPrice;
    String color;

    public Car(String name, int speed, double regularPrice, String color) {
        this.name = name;
        this.speed = speed;
        this.regularPrice = regularPrice;
        this.color = color;
    }

    public void getSalePrice() {
        System.out.println("discount price for " + this.name + " is " + 9000);
    }

    @Override
    public String toString() {
        return this.name + ", speed: " + this.speed + ", price: " + this.regularPrice + ", color: " + this.color;
    }
}
