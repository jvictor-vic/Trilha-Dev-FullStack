package Exercicio_5;

import java.math.BigDecimal;

public class main {
    static void main() {
        Boleto boleto = new Boleto();
        CartaoCredito cartaoCredito = new CartaoCredito();
        Pix pix = new Pix();

        boleto.processarPagamento(new BigDecimal("157.99"));
        cartaoCredito.processarPagamento(new BigDecimal("399.9"));
        pix.processarPagamento(new BigDecimal("54.32"));
    }
}
