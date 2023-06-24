const getOpeningHours = require('../src/getOpeningHours');

describe('getOpeningHours', () => {
  it('deve retornar o objeto de horas quando nenhum argumento for fornecido', () => {
    const result = getOpeningHours();
    expect(result).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('deve retornar a string "The zoo is closed" quando o dia for Monday e o horário for 09:00-AM', () => {
    const result = getOpeningHours('Monday', '09:00-AM');
    expect(result).toBe('The zoo is closed');
  });

  it('deve retornar a string "The zoo is open" quando o dia for Tuesday e o horário for 09:00-AM', () => {
    const result = getOpeningHours('Tuesday', '09:00-AM');
    expect(result).toBe('The zoo is open');
  });

  it('deve retornar a string "The zoo is closed" quando o dia for Wednesday e o horário for 09:00-PM', () => {
    const result = getOpeningHours('Wednesday', '09:00-PM');
    expect(result).toBe('The zoo is closed');
  });

  it('deve retornar a string "The zoo is closed" quando o dia for Monday e o horário for 09:00-AM', () => {
    const result = getOpeningHours('Monday', '09:00-AM');
    expect(result).toBe('The zoo is closed');
  });

  it('deve retornar a string "The zoo is open" quando o dia for Tuesday e o horário for 09:00-AM', () => {
    const result = getOpeningHours('Tuesday', '09:00-AM');
    expect(result).toBe('The zoo is open');
  });

  it('deve retornar a string "The zoo is closed" quando o dia for Wednesday e o horário for 09:00-PM', () => {
    const result = getOpeningHours('Wednesday', '09:00-PM');
    expect(result).toBe('The zoo is closed');
  });

  it('deve lançar uma exceção com a mensagem "The day must be valid. Example: Monday" quando o dia for inválido', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });

  it('deve lançar uma exceção com a mensagem "The abbreviation must be \'AM\' or \'PM\'" quando a abreviação for inválida', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('deve lançar uma exceção com a mensagem "The hour should represent a number" quando o formato da hora estiver incorreto', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });

  it('deve lançar uma exceção com a mensagem "The minutes should represent a number" quando o formato dos minutos estiver incorreto', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow('The minutes should represent a number');
  });

  it('deve lançar uma exceção com a mensagem "The hour must be between 0 and 12" quando a hora estiver fora do intervalo', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrow('The hour must be between 0 and 12');
  });

  it('deve lançar uma exceção com a mensagem "The minutes must be between 0 and 59" quando os minutos estiverem fora do intervalo', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
