"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const nota_1 = require("./nota");
const prompt = (0, prompt_sync_1.default)();
let option = '';
while (option !== '9') {
    console.log('=========Gestão Escolar=======+');
    console.log('1. Notas   📝                  ');
    console.log('9. Sair    👉                 ');
    option = prompt("Escolha uma opção:      \n");
    console.log('==============================+');
    switch (option) {
        case '1':
            let nota = new nota_1.Nota();
            nota.adicionarNota();
            break;
        case '9':
            console.log('Saindo do sistema...');
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }
}
//# sourceMappingURL=main.js.map