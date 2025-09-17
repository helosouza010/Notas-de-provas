"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Nota {
    constructor() {
        this.nome = '';
        this.notas = [];
    }
    adicionarNota() {
        const prompt = (0, prompt_sync_1.default)();
        this.nome = prompt('Digite o nome do aluno: ');
        for (let i = 1; i <= 4; i++) {
            const notaInput = prompt(`Digite a nota do ${i}º bimestre: `);
            const nota = parseFloat(notaInput);
            if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                this.notas.push(nota);
            }
            else {
                console.log('Nota inválida. Digite um número entre 0 e 10.');
                i--; // repete o bimestre atual
            }
        }
        this.exibirResultado();
    }
    exibirResultado() {
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
exports.Nota = Nota;
//# sourceMappingURL=nota.js.map