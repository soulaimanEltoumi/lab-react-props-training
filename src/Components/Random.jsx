export default function Random({ min, max }) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNum;
}
