/**
 * 取得日期的完整星期名稱 (例如: Monday)
 */
export function getWeekday(dateString: string): string {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

/**
 * 格式化日期為 MM/DD 形式 (例如: 05/20)
 */
export function formatShortDate(dateString: string): string {
  const dateObj = new Date(dateString);
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${month}/${day}`;
}
