import { describe, it, expect } from 'vitest';
import { ClienteManager } from './ClienteManager.js'
import { Cliente} from './Cliente.js'


describe('Testing the ClienteManager class', () => {

    it('should add a client', () => {
      const manager = new ClienteManager();
      const cliente = new Cliente('senha123', 'email@example.com', 'usuario');
      manager.adicionarCliente(cliente);
      expect(manager.clientes.length).toBe(1);
    });
  
    it('should remove a customer by email', () => {
      const manager = new ClienteManager();
      const cliente = new Cliente('senha123', 'email@example.com', 'usuario');
      manager.adicionarCliente(cliente);
      manager.removerCliente('email@example.com');
      expect(manager.clientes.length).toBe(0);
    });
  
    it('should search for a client by email', () => {
      const manager = new ClienteManager();
      const cliente = new Cliente('senha123', 'email@example.com', 'usuario');
      manager.adicionarCliente(cliente);
      expect(manager.buscarCliente('email@example.com')).toEqual(cliente);
    });

});