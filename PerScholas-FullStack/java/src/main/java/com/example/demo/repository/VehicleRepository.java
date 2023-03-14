package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Vehicles;

public interface VehicleRepository extends JpaRepository<Vehicles, Integer> {

}