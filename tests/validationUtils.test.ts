import { describe, it, expect } from 'vitest';
import { isEmail, isRequired, minLength } from '@/utils/validationUtils';

describe('validationUtils', () => {
  it('isRequired should fail on empty', () => {
    expect(isRequired('', '姓名').isValid).toBe(false);
  });

  it('minLength should validate length', () => {
    expect(minLength('abc', 2, '姓名').isValid).toBe(true);
  });

  it('isEmail should validate format', () => {
    expect(isEmail('test@mail.com', 'Email').isValid).toBe(true);
  });
});
