package br.com.technicalshare.springboot.repository;

import br.com.technicalshare.springboot.model.Mentores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface MentoresRepository extends JpaRepository<Mentores, Long> {
    // todos os metodos de crud do banco de dados
}
