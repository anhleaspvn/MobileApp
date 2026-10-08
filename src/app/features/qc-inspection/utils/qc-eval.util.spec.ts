import { evaluateDimResult, parseNumeric } from './qc-eval.util';

describe('QC Evaluation Util', () => {
  describe('parseNumeric', () => {
    it('should parse valid numbers', () => {
      expect(parseNumeric(10)).toBe(10);
      expect(parseNumeric('10.5')).toBe(10.5);
      expect(parseNumeric('10,5')).toBe(10.5);
      expect(parseNumeric('-5.2')).toBe(-5.2);
    });

    it('should return null for null, undefined, empty, or invalid values', () => {
      expect(parseNumeric(null)).toBeNull();
      expect(parseNumeric(undefined)).toBeNull();
      expect(parseNumeric('')).toBeNull();
      expect(parseNumeric('   ')).toBeNull();
      expect(parseNumeric('abc')).toBeNull();
    });
  });

  describe('evaluateDimResult', () => {
    it('should return OK by default when no actual values are provided', () => {
      expect(evaluateDimResult(10, 20, [])).toBe('OK');
      expect(evaluateDimResult(10, 20, ['', null, undefined])).toBe('OK');
    });

    it('should return OK when all actual values are within [min, max]', () => {
      expect(evaluateDimResult(10, 20, [15])).toBe('OK');
      expect(evaluateDimResult(10, 20, [10, 20, '15.5', '12,5'])).toBe('OK');
    });

    it('should return NG when any actual value is below min', () => {
      expect(evaluateDimResult(10, 20, [9.9])).toBe('NG');
      expect(evaluateDimResult(10, 20, [15, '9,9', 18])).toBe('NG');
    });

    it('should return NG when any actual value is above max', () => {
      expect(evaluateDimResult(10, 20, [20.1])).toBe('NG');
      expect(evaluateDimResult(10, 20, [15, '20,5', 18])).toBe('NG');
    });

    it('should evaluate correctly when only MIN is specified', () => {
      expect(evaluateDimResult(10, '', [10])).toBe('OK');
      expect(evaluateDimResult(10, '', [15])).toBe('OK');
      expect(evaluateDimResult(10, '', [9.5])).toBe('NG');
    });

    it('should evaluate correctly when only MAX is specified', () => {
      expect(evaluateDimResult('', 20, [20])).toBe('OK');
      expect(evaluateDimResult('', 20, [15])).toBe('OK');
      expect(evaluateDimResult('', 20, [20.5])).toBe('NG');
    });

    it('should return OK when actual values exist but neither MIN nor MAX is specified', () => {
      expect(evaluateDimResult('', '', [15, 20])).toBe('OK');
    });
  });
});
