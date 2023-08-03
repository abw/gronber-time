export function GronberTime() {
  const now      = new Date()
  const hours    = now.getHours();
  const minutes  = now.getMinutes();
  const seconds  = now.getSeconds();
  const quadrant = Math.floor(hours / 6);
  const qminutes = minutes + 60 * (hours % 6);
  const blurg    = Math.floor(qminutes / 72);
  const bminutes = qminutes % 72;
  const gronber  = Math.floor(bminutes / 8);
  const gremain  = bminutes % 8;
  const gseconds = gremain * 60 + seconds;
  const nibblum  = Math.floor(gseconds / 4);
  const partum   = gseconds % 4;
  return {
    hours, minutes, seconds,
    quadrant, blurg, gronber, nibblum, partum
  }
}

export default GronberTime
