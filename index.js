const distanceFromHqInBlocks = stNumber => Math.abs(42 - stNumber);

const distanceFromHqInFeet = stNumber => distanceFromHqInBlocks(stNumber) * 264

const distanceTravelledInFeet = (stNumberStart, stNumberEnd) => Math.abs(stNumberStart - stNumberEnd) * 264

const calculatesFarePrice = (stNumberStart, stNumberEnd) => {
  const feet = distanceTravelledInFeet(stNumberStart, stNumberEnd)
  if (feet - 400 <= 0) return 0;
  if (feet > 2000 && feet < 2500) return 25;
  if (feet > 2500) return 'cannot travel that far';
  return (feet - 400) * .02;
}