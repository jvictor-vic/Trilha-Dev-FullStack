package Exercicio_5;

import java.util.Scanner;

public class Pix extends FormaPagamento {
    private final int senha = 123;
    Scanner scanner = new Scanner(System.in);

    @Override
    boolean validarPagamento() {
        boolean isValid;

        //recebe a senha
        System.out.println("Senha: ");
        int input = scanner.nextInt();

        //confirma se a senha é valida
        if(input == senha) {
            System.out.println("Transação aprovada!");
            isValid = true;
        } else {
            System.out.println("Senha inválida");
            isValid = false;
        }
        return isValid;
    }
}
