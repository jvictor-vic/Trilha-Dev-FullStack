package Exercicio_1;

public class main {
    static void main() {
        //Criando produto BalaMacaVerde
        Produto BalaMacaVerde = new Produto();
        BalaMacaVerde.setNome("Bala Maça Verde");
        BalaMacaVerde.setPreco(0.60);
        BalaMacaVerde.setQuantidadeEmEstoque(100);

        System.out.println("Produto: " + BalaMacaVerde.getNome());
        System.out.println("Preco: " + BalaMacaVerde.getPreco());
        System.out.println("Quantidade: " + BalaMacaVerde.getQuantidadeEmEstoque());
        System.out.println("Disponibilidade: " + BalaMacaVerde.isAvailable());
        System.out.println("-------");
        System.out.println();

        //Testando definir um nome vazio para um produto
        Produto Nulo = new Produto();
//        Nulo.setNome(null);
//        Nulo.setNome("  ");

        //testando definit precos invalidos
        Produto TestePreco = new Produto();
//        TestePreco.setPreco(0.0);
//        TestePreco.setPreco(-10.0);

        //Testando definir quantidadesEmEstoque invalidas
        Produto TesteEstoque = new Produto();
//        TesteEstoque.setQuantidadeEmEstoque(-1);
//        TesteEstoque.setQuantidadeEmEstoque(1.2);
        TesteEstoque.setQuantidadeEmEstoque(0); //deve ser válido
        System.out.println("Deve ser 0 sinalizando estoque vazio - " + TesteEstoque.getQuantidadeEmEstoque());
        System.out.println("Deve sinalizar que o produto não esta disponivel: " + TesteEstoque.isAvailable());
    }
}
