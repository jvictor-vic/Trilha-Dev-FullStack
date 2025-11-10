package Exercicio_4;

public class main {
    static void main() {
        //Iniciando instancias dos meios de trnasporte
        MeioTransporte carro = new Carro();
        MeioTransporte moto = new Moto();
        MeioTransporte trem = new Trem();

        //começando a corrida
        for (int i = 0; i <= 5; i++) {
            carro.acelerar();
            moto.acelerar();
            trem.acelerar();
        }

        //exibindo a velocidade final
        System.out.println("Carro: " + carro.getVelocidade() + "Km/h");
        System.out.println("Moto: " + moto.getVelocidade() + "Km/h");
        System.out.println("trem: " + trem.getVelocidade() + "Km/h");

        for (int i = 0; i <= 5; i++) {
            carro.frear();
            moto.frear();
            trem.frear();
        }
    }
}
