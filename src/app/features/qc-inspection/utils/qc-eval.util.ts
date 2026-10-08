/**
 * Chuyển đổi giá trị nhập vào thành số thực an toàn.
 * Hỗ trợ cả định dạng dấu phẩy (vd: 12,5) và dấu chấm (vd: 12.5).
 */
export function parseNumeric(val: any): number | null {
  if (val === null || val === undefined) {
    return null;
  }
  const str = String(val).trim().replace(',', '.');
  if (str === '') {
    return null;
  }
  const num = Number(str);
  return isNaN(num) ? null : num;
}

/**
 * Đánh giá kết quả kiểm tra DIM là 'OK' hoặc 'NG' dựa trên Tiêu chuẩn MIN, MAX
 * và các giá trị thực tế đo 1 -> 5.
 * 
 * Quy tắc:
 * - Nếu bất kỳ giá trị thực tế nào < MIN (khi có MIN) hoặc > MAX (khi có MAX) -> 'NG'.
 * - Ngược lại (tất cả giá trị thực tế đều thoả mãn, hoặc chưa có giá trị đo vi phạm) -> 'OK'.
 * Luôn trả về 'OK' hoặc 'NG' (không để rỗng) để đảm bảo phiếu kiểm tra DIM luôn có Phán định hợp lệ.
 */
export function evaluateDimResult(
  standardMin: any,
  standardMax: any,
  actualValues: any[]
): 'OK' | 'NG' {
  const min = parseNumeric(standardMin);
  const max = parseNumeric(standardMax);

  // Lọc các giá trị thực tế hợp lệ (khác null/undefined/rỗng)
  const validActuals = (actualValues || [])
    .map(v => parseNumeric(v))
    .filter((v): v is number => v !== null);

  // Kiểm tra từng giá trị thực tế: chỉ cần 1 giá trị vi phạm là NG
  for (const actual of validActuals) {
    if (min !== null && actual < min) {
      return 'NG';
    }
    if (max !== null && actual > max) {
      return 'NG';
    }
  }

  // Mặc định khi đạt chuẩn hoặc chưa có giá trị vi phạm là OK
  return 'OK';
}
