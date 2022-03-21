import formatCapacity from './formatCapacity';

export class NegativeCpacityError extends Error {

}

jest.mock('pluralize', () => {
  return () => 'test';
});

describe('formatCapacity', () => {
  it('returns capacity and result from pluralize', () => {
    const result = formatCapacity(1);

    expect(result).toBe('1 test');
  });

  it('returns "no people" when passed capacity = 0', () => {
    const result = formatCapacity(0);

    expect(result).toBe('no people');
  });

  it('throws error when passed capacity is lower then 0', () => {
    const result = () => formatCapacity(-1);

    expect(result).toThrow(NegativeCpacityError);
  });
});

