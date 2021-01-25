function formatDate(date: Date) {
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let strDate: number | string = date.getDate();
  let strMiuns: number | string = date.getMinutes();
  let strHoursAndMiuns: number | string = date.getHours() + ':' + (strMiuns.toString().length === 1 ? '0' + strMiuns : strMiuns);
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return year + '-' + month + '-' + strDate + ' ' + strHoursAndMiuns;
}

export default formatDate