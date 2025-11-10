package Exercicio_5;

import java.util.Scanner;

public class CartaoCredito extends FormaPagamento {
    Scanner scanner = new Scanner(System.in);

    @Override
    boolean validarPagamento() {
        boolean isValid;

        //recebe a senha
        System.out.println("Numero do cartão: ");
        int NumeroCartao = scanner.nextInt();

        //recebe o cvv
        System.out.println("CVV: ");
        int CVV = scanner.nextInt();

        //checa se o cvv é válido
        if (CVV > 999 || CVV < 1) {
            System.out.println("Cartão Inválido!");
            isValid = false;
        } else {
            System.out.println("Transação Aprovada!");
            isValid = true;
        }
        return isValid;
    }
}
