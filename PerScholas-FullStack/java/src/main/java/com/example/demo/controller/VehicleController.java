package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Vehicles;
import com.example.demo.repository.VehicleRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    // adding a vehicle
    @PostMapping("/vehicles")
    Vehicles newVehicle(@RequestBody Vehicles newVehicle) {
        return vehicleRepository.save(newVehicle);
    }

    // viewing a vehicle
    @GetMapping("/vehicles/{id}")
    Optional<Vehicles> getVehicleById(@PathVariable Integer id) {
        return vehicleRepository.findById(id);
    }

    // viewing all vehicles
    @GetMapping("/vehiclesList")
    List<Vehicles> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // updating a vehicle
    @PutMapping("/vehicles/{id}")
    Optional<Vehicles> updateVehicle(@RequestBody Vehicles newVehicle, @PathVariable Integer id) {
        return vehicleRepository.findById(id).map(vehicle -> {
            vehicle.setType(newVehicle.getType());
            vehicle.setMake(newVehicle.getMake());
            vehicle.setModel(newVehicle.getModel());
            vehicle.setYear(newVehicle.getYear());
            return vehicleRepository.save(vehicle);
        });
    }

    // deleting a vehicle
    @DeleteMapping("/vehicles/{id}")
    String deleteVehicle(@PathVariable Integer id) {
        vehicleRepository.deleteById(id);
        return "Vehicle deleted";
    }

}
