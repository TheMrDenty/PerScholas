package PolymorphismAndInheritance;

import PolymorphismAndInheritance.Monster;

public class FireMonster extends Monster {
    @Override
    public void attack() {
        System.out.println("The fire monster breathes fire!");
    }
}
