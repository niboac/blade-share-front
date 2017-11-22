// 数字（包括小数）验证，适用于 el-input 元素
export const calendarFormat = function(value, type) {
  console.log('calendarFormat ', value)
  let deal = value.split('T')[0]
  console.log('deal = ', deal)
  return deal
};
