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
