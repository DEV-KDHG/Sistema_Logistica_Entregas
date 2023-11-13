package com.example.RegisterLoguin.Servicios.iml;


import com.example.RegisterLoguin.Dto.LoguinDTO;
import com.example.RegisterLoguin.Dto.SecretarioDto;
import com.example.RegisterLoguin.Entidad.Secretario;
import com.example.RegisterLoguin.Repositorio.SecretarioRepo;
import com.example.RegisterLoguin.Servicios.SecretarioServicio;
import com.example.RegisterLoguin.response.LoguinResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SecretarioIMPL implements SecretarioServicio {
    @Autowired
    private SecretarioRepo secretarioRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addEmployee(SecretarioDto secretarioDto) {
        String email = secretarioDto.getEmail();

        // Verificar si el correo ya está en uso
        Secretario existingEmployee = secretarioRepo.findByEmail(email);

        if (existingEmployee != null) {
            return "El correo ya está registrado";
        } else {
            Secretario employee = new Secretario(
                    secretarioDto.getEmployeeid(),
                    secretarioDto.getEmployeename(),
                    email,
                    this.passwordEncoder.encode(secretarioDto.getPassword())
            );
            secretarioRepo.save(employee);
            return employee.getEmployeename();
        }
    }

    SecretarioDto secretarioDto;
    @Override
    public LoguinResponse loginEmployee(LoguinDTO loguinDTO) {
        String msg = "";



        Secretario employee1 = secretarioRepo.findByEmail(loguinDTO.getEmail());


        if (employee1 != null) {
            String password = loguinDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Secretario> employee = secretarioRepo.findOneByEmailAndPassword(loguinDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoguinResponse("Login Success", true);
                } else {
                    return new LoguinResponse("Login Failed", false);
                }
            } else {
                return new LoguinResponse("password Not Match", false);
            }
        }else {
            return new LoguinResponse("Email not exits", false);
        }
    }
}