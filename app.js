// Importa as classes Cliente e ClienteManager
import Cliente from './entities/Cliente.js'
import ClienteManager from './entities/ClienteManager.js'

// Criação de ClienteManager
const manager = new ClienteManager();


// Criação de clientes
const cliente1 = new Cliente();
cliente1.criar('senha123', 'email1@example.com', 'usuario1');

const cliente2 = new Cliente();
cliente2.criar('senha456', 'email2@example.com', 'usuario2');

console.log('\nClientes criados:');
console.log(cliente1.ler());
console.log(cliente2.ler());

// Adicionando clientes ao ClienteManager
console.log('\nAdicionando clientes ao gerenciador...');
manager.adicionarCliente(cliente1);
manager.adicionarCliente(cliente2);

console.log('\nClientes no gerenciador:');
console.log(manager.clientes);

// Atualizando um cliente
console.log('\nAtualizando cliente1...');
cliente1.atualizar('novaSenha123', 'novoEmail1@example.com', 'novoUsuario1');
console.log(cliente1.ler());

// Buscando um cliente
console.log('\nBuscando cliente pelo email...');
const clienteBuscado = manager.buscarCliente('novoEmail1@example.com');
console.log(clienteBuscado ? clienteBuscado.ler() : 'Cliente não encontrado.');

// Removendo um cliente
console.log('\nRemovendo cliente2...');
manager.removerCliente('email2@example.com');
console.log('Clientes no gerenciador após remoção:');
console.log(manager.clientes);

// Deletando atributos do cliente
console.log('\nDeletando atributos do cliente1...');
cliente1.deletar();
console.log(cliente1.ler());
 