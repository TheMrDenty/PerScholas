
public class Ford extends Car {
    int year;
    double manufacturerDiscount;

    public Ford(String name, int speed, double regularPrice, String color, int year, double manufacturerDiscount) {
        super(name, speed, regularPrice, color);
        this.year = year;
        this.manufacturerDiscount = manufacturerDiscount;

    }

    @Override
    public void getSalePrice() {

        double salePrice = regularPrice - (regularPrice * manufacturerDiscount);
        System.out.println("manufacturer discount price for " + this.name + " is " + salePrice);

    }

    public String toString() {
        return this.name + ", speed: " + this.speed + ", price: " + this.regularPrice + ", color: " + this.color +
                ", year: " + this.year + ", manufacturers discount: " + this.manufacturerDiscount;
    }

}
