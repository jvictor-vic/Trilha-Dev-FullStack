package Exercicio_2;

import Exercicio_1.Produto;

public class main {
    static void main() {
        //Criando produto BalaMacaVerde
        ProdutoDesconto ShampooCristianoRonaldo = new ProdutoDesconto();
        ShampooCristianoRonaldo.setNome("Shampoo do Cristiano Ronaldo");
        ShampooCristianoRonaldo.setPreco(40.00);
        ShampooCristianoRonaldo.setQuantidadeEmEstoque(100);

        System.out.println("Produto: " + ShampooCristianoRonaldo.getNome());
        System.out.println("Preco: " + ShampooCristianoRonaldo.getPreco());
        System.out.println("Quantidade: " + ShampooCristianoRonaldo.getQuantidadeEmEstoque());
        System.out.println("Disponibilidade: " + ShampooCristianoRonaldo.isAvailable());
        System.out.println("-------");
        System.out.println();

        //getPrecoDesconto retorna preco normal caso não tenha desconto aplicado
        System.out.println("Mesmo Preco: " + ShampooCristianoRonaldo.getPrecoDesconto());

        //Aplicando desconto de 10%
        ShampooCristianoRonaldo.aplicarDesconto(10);
        System.out.println("Novo Preco: " + ShampooCristianoRonaldo.getPrecoDesconto());

        //Tentando aplicar desconto 0 ou maior que 50
        ProdutoDesconto ProdutoTeste = new ProdutoDesconto();
        ProdutoTeste.setPreco(100);
        System.out.println("Preço inicial do teste: " + ProdutoTeste.getPreco());
//        ProdutoTeste.aplicarDesconto(0);
//        ProdutoTeste.aplicarDesconto(90);
        ProdutoTeste.aplicarDesconto(50); //desconto máximo
        System.out.println("Preço ao final do teste: " + ProdutoTeste.getPrecoDesconto());
    }
}
