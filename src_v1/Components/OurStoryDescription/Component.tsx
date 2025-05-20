import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import helpers from '../../utils/helpers';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

// Define the types for the props
interface ComponentProps {
  title: string;
  Description1?: string;
  Description2?: string;
}

const Component: React.FC<ComponentProps> = ({ title, Description1, Description2 }) => {
  const renderDescription = () => {
    if (Description1 && Description2) {
      return `${Description1}\n\n${Description2}`;
    }
    if (Description1) {
      return Description1;
    }
    return ''; // Return an empty string if no description
  };

  return (
    <View style={styles.Container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <View style={{ width: helpers.normalize(77) }}>
            <HorizontalLine
              lineStyle={{ height: 3 }}
              containerMain={{ marginVertical: 4 }}
              color="#F51796"
            />
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={styles.TextStyle}>
            {renderDescription()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Component;

// import React from 'react';
// import { Text, View } from 'react-native';
// import styles from './Styles';
// import helpers from '../../utils/helpers';
// import HorizontalLine from '../HorizontalLine/HorizontalLine';

// // Define the types for the props
// interface ComponentProps {
//   title: string;
//   Description1?: string;
//   Description2?: string;
// }

// const Component: React.FC<ComponentProps> = ({ title, Description1, Description2 }) => {
//   return (
//     <View style={styles.Container}>
//       <View style={styles.card}>
//         <View>
//           <Text style={styles.titleStyle}>{title}</Text>
//           <View style={{ width: helpers.normalize(77) }}>
//             <HorizontalLine
//               lineStyle={{ height: 3 }}
//               containerMain={{ marginVertical: 4 }}
//               color="#F51796"
//             />
//           </View>
//         </View>

//         <View style={{ marginVertical: 10 }}>
//           <Text style={styles.TextStyle}>
//             {Description1
//               ? Description2
//                 ? `${Description1}\n\n${Description2}`
//                 : Description1
//               : null}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Component;
