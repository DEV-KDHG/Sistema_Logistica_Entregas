package com.example.RegisterLoguin.Servicios;

import com.example.RegisterLoguin.Dto.LoguinDTO;
import com.example.RegisterLoguin.Dto.SecretarioDto;
import com.example.RegisterLoguin.response.LoguinResponse;

public interface   SecretarioServicio {

    String addEmployee(SecretarioDto secretarioDto);

    LoguinResponse loginEmployee(LoguinDTO loguinDTO);



}
