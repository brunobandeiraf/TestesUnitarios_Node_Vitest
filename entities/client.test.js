import { describe, it, expect } from 'vitest';
import { Cliente } from './Cliente.js';

describe('Testing the Client class', () => {

  it('should create a new client correctly', () => {
    const cliente = new Cliente(null, null, null);
    cliente.criar('senha123', 'email@example.com', 'usuario');
    expect(cliente.ler()).toEqual({
      senha: 'senha123',
      email: 'email@example.com',
      nome_usuario: 'usuario',
    });
  });

  it('should update customer attributes', () => {
    const cliente = new Cliente('senha123', 'email@example.com', 'usuario');
    cliente.atualizar('novaSenha', 'novoEmail@example.com');
    expect(cliente.ler()).toEqual({
      senha: 'novaSenha',
      email: 'novoEmail@example.com',
      nome_usuario: 'usuario',
    });
  });

  it('should delete the client', () => {
    const cliente = new Cliente('senha123', 'email@example.com', 'usuario');
    cliente.deletar();
    expect(cliente.ler()).toEqual({
      senha: null,
      email: null,
      nome_usuario: null,
    });
  });
});


