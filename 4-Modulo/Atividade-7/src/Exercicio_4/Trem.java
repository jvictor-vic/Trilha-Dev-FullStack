package Exercicio_4;

public class Trem implements MeioTransporte {
    private int velocidade;

    @Override
    public void acelerar() {
        if (velocidade <= 160){
            velocidade += 3;
        }
        System.out.println("choo-choo");
    }

    public void frear() {
        if (velocidade >= 0) {
            velocidade -= 2;
            if (velocidade < 0) velocidade = 0;
        }
        System.out.println("hsssss");
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
