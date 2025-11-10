package Exercicio_4;

public class Moto implements MeioTransporte {
    private int velocidade;

    @Override
    public void acelerar() {
        if (velocidade <= 140){
            velocidade += 10;
        }
        System.out.println("Vruummm!");
    }

    public void frear() {
        if (velocidade >= 0) {
            velocidade -= 14;
            if (velocidade < 0) velocidade = 0;
        }
        System.out.println("skrrrr");
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
