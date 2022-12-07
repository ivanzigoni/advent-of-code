class Teste {
  parent
  num = 0

  addNum(q) {
    this.num += q
    if (this.parent) {
      console.log('aqui')
      this.parent.addNum(q)
    }
  }
}

const obj = {
  teste1: new Teste(),
  teste2: new Teste(),
  teste3: new Teste(),
  teste4: new Teste(),
  teste5: new Teste()
}



obj.teste1.parent = obj.teste2
obj.teste2.parent = obj.teste3
obj.teste3.parent = obj.teste4
obj.teste5.parent = obj.teste4

obj.teste1.addNum(1)
obj.teste2.addNum(1)
obj.teste5.addNum(1);

console.log(obj.teste4, '4');
console.log(obj.teste1, '1');
console.log(obj.teste5, '5');
