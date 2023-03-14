package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Vehicles {

    @Id
    @GeneratedValue
    private int id;
    private String type;
    private String make;
    private String model;
    private int year;
}
