package PolymorphismAndInheritance;

import PolymorphismAndInheritance.Monster;

public class WaterMonster extends Monster {
    @Override
    public void attack() {
        System.out.println("The water monster sprays water!");
    }
}
