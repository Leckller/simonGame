import { blue, green, red, yellow } from '../sounds';
import { Colors } from '../Types/Colors';

export default function Song(color: Colors) {
  switch (color) {
    case 'green':
      return green;
    case 'red':
      return red;
    case 'yellow':
      return yellow;
    case 'blue':
      return blue;
    default:
      break;
  }
}
