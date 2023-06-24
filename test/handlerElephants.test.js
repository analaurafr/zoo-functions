const handlerElephants = require('../src/handlerElephants');

describe('handlerElephants', () => {
  describe('Parameter count', () => {
    it('should return the number of elephants', () => {
      const result = handlerElephants('count');
      expect(result).toBe(4);
    });
  });

  describe('Parameter names', () => {
    it('should return an array with the names of all elephants', () => {
      const result = handlerElephants('names');
      const expected = ['Jefferson', 'Washington', 'Lincoln', 'Roosevelt'];
      expect(result).toEqual(expected);
    });
  });

  describe('Parameter averageAge', () => {
    it('should return the average age of elephants', () => {
      const result = handlerElephants('averageAge');
      expect(result).toBeCloseTo(10.5);
    });
  });

  describe('Invalid parameter', () => {
    it('should return an error message for invalid parameter', () => {
      const result = handlerElephants(123);
      const expected = 'Parâmetro inválido, é necessário uma string';
      expect(result).toBe(expected);
    });
  });
});

describe('handlerElephants', () => {
  it('deve retornar a quantidade de elefantes quando o argumento for "count"', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });

  it('deve retornar um array com os nomes dos elefantes quando o argumento for "names"', () => {
    const result = handlerElephants('names');
    expect(result).toContain('Jefferson');
  });

  it('deve retornar a média de idade dos elefantes quando o argumento for "averageAge"', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5);
  });

  it('deve retornar a localização dos elefantes dentro do Zoológico quando o argumento for "location"', () => {
    const result = handlerElephants('location');
    expect(result).toBe('Central Park');
  });

  it('deve retornar a popularidade dos elefantes quando o argumento for "popularity"', () => {
    const result = handlerElephants('popularity');
    expect(result).toBe('high');
  });

  it('deve retornar um array com os dias disponíveis para visitar os elefantes quando o argumento for "availability"', () => {
    const result = handlerElephants('availability');
    expect(result).toEqual(['segunda-feira', 'quarta-feira', 'sexta-feira']);
  });

  it('deve retornar undefined quando nenhum argumento for fornecido', () => {
    const result = handlerElephants();
    expect(result).toBe(undefined);
  });

  it('deve retornar uma mensagem de erro quando o argumento não for uma string', () => {
    const result = handlerElephants(123);
    expect(result).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('deve retornar null quando o argumento não corresponder a nenhuma informação válida', () => {
    const result = handlerElephants('invalid');
    expect(result).toBe(null);
  });
});
