package com.example.RegisterLoguin.Controlador;

import com.example.RegisterLoguin.Dto.LoguinDTO;
import com.example.RegisterLoguin.Dto.SecretarioDto;
import com.example.RegisterLoguin.Servicios.SecretarioServicio;
import com.example.RegisterLoguin.response.LoguinResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/employee")

@CrossOrigin
public class SecretarioControlador {
@Autowired
private SecretarioServicio secretarioServicio;





    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody SecretarioDto secretarioDto)
    {
        String id = secretarioServicio.addEmployee(secretarioDto);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoguinDTO loguinDTO)
    {
        LoguinResponse loginResponse = secretarioServicio.loginEmployee(loguinDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
