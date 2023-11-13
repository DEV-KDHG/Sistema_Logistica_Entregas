package com.example.RegisterLoguin.Dto;

public class LoguinDTO {
    private String email;
    private String password;

    public LoguinDTO() {
    }

    public LoguinDTO(String email, String password) {
        this.email = email;
        this.password = password;


    } //create getters and setters

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
