
export default function getWeekNumber(date){
    var tdt = date;
    var dayn = (date.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) 
      {
     tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
       }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}
