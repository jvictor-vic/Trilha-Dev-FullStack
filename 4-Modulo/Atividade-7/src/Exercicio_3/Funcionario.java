package Exercicio_3;

import java.math.BigDecimal;

public class Funcionario {
    protected String nome;
    protected BigDecimal salario;
    protected BigDecimal Bonus;

    public Funcionario(String nome, BigDecimal salario) {
        if (salario == null || salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("O salário deve ser positivo.");
        }
        this.nome = nome;
        this.salario = salario;
    }

    public Funcionario() {
    }

    public void calcularBonus() {
        Bonus = this.salario.multiply(new BigDecimal("0.2"));
    }

    public BigDecimal getBonus() {
        return Bonus;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }
}
