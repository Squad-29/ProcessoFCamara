package br.com.technicalshare.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "mentores")
public class Mentores {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "bio")
    private String bio;

    @Column(name = "email")
    private String email;

    @Column(name = "cargo")
    private String cargo;

    @Column(name = "espec")
    private String espec;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "horarios")
    private String horario;

    @Column(name = "senha")
    private String senha;
}
