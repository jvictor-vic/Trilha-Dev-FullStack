package Exercicio_5;

import java.util.Scanner;

public class Boleto extends FormaPagamento {
    private final int senha = 123;
    Scanner scanner = new Scanner(System.in);

    @Override
    boolean validarPagamento() {
        boolean isValid;

        //Recebe o vencimento
        System.out.print("Vencimento (mm/aa): ");
        String data = scanner.nextLine(); // Lê como String

        //Separa mês e ano
        String[] partes = data.split("/");
        if (partes.length == 2) {
            final String mes = partes[0];
            final String ano = partes[1];
        } else {
            System.out.println("Data inválida!");
            isValid = false;
        }

        //recebe a senha
        System.out.println("Senha: ");
        int input = scanner.nextInt();

        //confirma se a senha é válida
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
