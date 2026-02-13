// 驗證工具：示範 TypeScript 函式型別與回傳格式
export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const isRequired = (value: string, label: string): ValidationResult => {
  const isValid = value.trim().length > 0;
  return {
    isValid,
    message: isValid ? '' : `${label} 為必填`
  };
};

export const minLength = (value: string, min: number, label: string): ValidationResult => {
  const isValid = value.trim().length >= min;
  return {
    isValid,
    message: isValid ? '' : `${label} 至少需要 ${min} 個字元`
  };
};

export const isEmail = (value: string, label: string): ValidationResult => {
  // 注意：正規表示法僅用於前端基本檢查，後端仍需再次驗證
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(value.trim());
  return {
    isValid,
    message: isValid ? '' : `${label} 格式不正確`
  };
};
