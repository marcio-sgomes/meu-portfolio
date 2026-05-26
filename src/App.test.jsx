import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Componente App', () => {
  it('deve exibir o titulo Meu Portfolio Profissional na tela', () => {
    // 1. PREPARAÇÃO: O robô "abre" a página no navegador invisível
    render(<App />)
    
    // 2. AÇÃO: O robô procura na tela um texto específico
    const titulo = screen.getByText('Meu Portfólio Profissional')
    
    // 3. VALIDAÇÃO: O robô afirma que esse texto TEM que estar no documento
    expect(titulo).toBeInTheDocument()
  })
})