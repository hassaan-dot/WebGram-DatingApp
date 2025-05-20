import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
export const styles = StyleSheet.create({
 row: {
    flexDirection: 'row',
    marginVertical: helpers.normalize(20),
  },
  container: { ///////////
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: helpers.normalize(5),
  },
  circle: {///////////////
    width: helpers.normalize(60),
    height: helpers.normalize(60),
    borderRadius: helpers.normalize(30),
    backgroundColor: '#FFEAF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBorder: {//////
    borderWidth: 2,
    borderColor: '#F5169C',
  },
  image: {///////
    width: helpers.normalize(55),
    height: helpers.normalize(55),
    borderRadius: helpers.normalize(27.5),
  },
  icon: {///
    fontSize: helpers.normalize(24),
    color: '#F5169C',
  },
  label: { ///
    marginTop: helpers.normalize(8),
    fontSize: helpers.normalize(12),
    color: '#4E5D78',
    textAlign: 'center',
  },
});
