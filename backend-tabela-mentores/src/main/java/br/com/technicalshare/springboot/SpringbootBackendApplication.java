package br.com.technicalshare.springboot;

import br.com.technicalshare.springboot.model.Mentores;
import br.com.technicalshare.springboot.repository.MentoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private MentoresRepository mentoresRepository;

	@Override
	public void run(String... args) throws Exception {

	}
}
