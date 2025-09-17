import promptSync from 'prompt-sync';

export class Nota {
    private nome: string = '';
    private notas: number[] = [];

    adicionarNota(): void {
        const prompt = promptSync();

        this.nome = prompt('Digite o nome do aluno: ');

        for (let i = 1; i <= 4; i++) {
            const notaInput = prompt(`Digite a nota do ${i}º bimestre: `);
            const nota = parseFloat(notaInput);

            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                this.notas.push(nota);
            } else {
                console.log('Nota inválida. Digite um número entre 0 e 10.');
                i--; // repete o bimestre atual
            }
        }

        this.exibirResultado();
    }

    private exibirResultado(): void {
        const soma = this.notas.reduce((acc, val) => acc + val, 0);
        const media = soma / 4;
        const status = media >= 6 ? '✅ Aprovado' : '❌ Reprovado';

        console.log('\n===== Resultado Final =====');
        console.log(`Aluno: ${this.nome}`);
        console.log(`Notas: ${this.notas.join(', ')}`);
        console.log(`Média: ${media.toFixed(2)}`);
        console.log(`Situação: ${status}`);
        console.log('===========================\n');
    }
}
