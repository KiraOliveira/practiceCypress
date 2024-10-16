///<reference types="cypress"/>

describe('Tipos de validação', () => {
  it('', () => {
    // criando Variáveis
    var a = 1
    var b = 2

    ///Dados da validação - Variáveis
    expect(a).equal(1)
    expect(a).not.be.equal(2)
    expect(b).equal(2)
    expect(b).not.be.equal(1)

    // OBJETO
    const obj = {
      a: 1,
      b: 2
    }
    expect(obj).to.be.equal(obj)
    expect(obj).equal(obj)
    expect(obj).to.have.property('a')
    expect(obj).to.have.property('b')
    expect(obj).eql({ a: 1, b: 2 })
  })
})
