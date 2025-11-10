package Exercicio_4;

public class Carro implements MeioTransporte {
    private int velocidade;

    @Override
    public void acelerar() {
        if (velocidade <= 160){
            velocidade += 8;
        }
        System.out.println("Vrummm!");
    }

    public void frear() {
        if (velocidade >= 0) {
            velocidade -= 10;
            if (velocidade < 0) velocidade = 0;
        }
        System.out.println("skrrrr");
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
