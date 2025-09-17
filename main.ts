import promptSync from 'prompt-sync';
import {Nota} from './nota';

const prompt = promptSync();

let option:  string = '';


while (option !== '9') {
    console.log('=========Gestão Escolar=======+');
    console.log('1. Notas   📝                  ');
    console.log('9. Sair    👉                 ');
     option = prompt("Escolha uma opção:      \n");
    console.log('==============================+');


 switch (option) {
        case '1':
            let nota = new Nota();
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