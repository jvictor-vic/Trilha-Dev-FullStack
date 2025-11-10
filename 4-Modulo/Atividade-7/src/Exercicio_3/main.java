package Exercicio_3;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class main {
    static void main() {
        List<Funcionario> funcionariosList = new ArrayList<>();

        funcionariosList.add(new Gerente("Cleiton", new BigDecimal("10000")));
        funcionariosList.add(new Desenvolvedor("Zezinho", new BigDecimal("2000")));
        funcionariosList.add(new Desenvolvedor("Zezinha", new BigDecimal("2200")));
        funcionariosList.add(new Funcionario("Chiquinho", new BigDecimal("2200")));

        for (Funcionario x : funcionariosList) {
            System.out.println("Bonus de " + x.getNome() + " = " + x.getBonus());
        }
    }
}
