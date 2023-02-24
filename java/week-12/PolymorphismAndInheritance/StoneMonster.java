package PolymorphismAndInheritance;

import PolymorphismAndInheritance.Monster;

public class StoneMonster extends Monster {
    @Override
    public void attack() {
        System.out.println("The stone monster throws rocks!");
    }
}