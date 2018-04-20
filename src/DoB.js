class DoB {
  constructor(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
  }
  differenceSec(nowYear,nowMonth,nowDay){
    let diffYear;
    let diffMonth;
    let diffDay;
    let diffSum;
    diffYear = nowYear - this.year
    diffMonth = nowMonth - this.month
    diffDay = nowDay - this.day
    diffSum = (diffYear * 365 * 24 * 60 * 60);
    diffSum += (diffMonth * 30 * 24 * 60 *60);
    diffSum += (diffDay * 24 * 60 * 60);
    return diffSum
  }
}
export { DoB };
