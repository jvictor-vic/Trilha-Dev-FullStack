package Exercicio_3;

import java.math.BigDecimal;

public class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, BigDecimal salario) {
        if (salario == null || salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("O salário deve ser positivo.");
        } else {
            this.nome = nome;
            this.salario = salario;
        }
        calcularBonus();
    }

    @Override
    public void calcularBonus() {
        Bonus = this.salario.multiply(new BigDecimal("0.1"));
    }
}
