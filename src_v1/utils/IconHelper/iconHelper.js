import { FaBeer, FaHome } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';

const Ionicon_com = ({ type, name, size = 25, color = '#ffff', style }) => {
  let IconComponent;

  switch (type) {
    case 'FontAwesome':
      IconComponent = FaBeer;  // Replace with the correct FontAwesome icon
      break;
    case 'MaterialIcons':
      IconComponent = MdStar;  // Replace with the correct Material icon
      break;
    default:
      IconComponent = FaHome;  // Default icon if none match
  }

  return <IconComponent size={size} color={color} style={style} />;
};

export default Ionicon_com;
