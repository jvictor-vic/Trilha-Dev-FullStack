package Exercicio_2;

import Exercicio_1.Produto;

public class ProdutoDesconto extends Produto {
    private Double precoDesconto;

    public void aplicarDesconto(double procentagem) {
        if (procentagem <= 0 || procentagem > 50) {
            throw new IllegalArgumentException("O desconto deve ser de uma porcentagem maior que 0 e menor que 50%");
        } else {
            this.precoDesconto = this.getPreco() * (1 - (procentagem/100));
        }
    }

    public Double getPrecoDesconto() {
        if (precoDesconto == null) {
            return this.getPreco();
        } else {
            return precoDesconto;
        }
    }
}
