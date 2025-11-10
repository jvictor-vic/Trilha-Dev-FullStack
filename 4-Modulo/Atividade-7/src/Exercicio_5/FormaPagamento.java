package Exercicio_5;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    abstract boolean validarPagamento();

    public void processarPagamento(BigDecimal valor) {
        System.out.println("Procesando paragemento no valor R$" + valor);
        if (validarPagamento()) {
            System.out.println("Pagamento aprovado!");
        } else {
            System.out.println("Pagamento reprovado");
        }
    }
}
