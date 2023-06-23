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
});
