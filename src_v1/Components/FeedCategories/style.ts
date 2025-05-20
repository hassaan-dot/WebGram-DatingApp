import { StyleSheet } from 'react-native';
import helpers from '../../utils/helpers';
import { PoppinsRegular } from '../../Resources/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: helpers.normalize(30),
    borderWidth: helpers.normalize(2),
    borderColor: '#F5169C',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: helpers.normalize(20),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: helpers.normalize(8),
  },
  tabText: {
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsRegular,
    color: '#FCBAE2',
  },
  activeTab: {
    backgroundColor: '#F5169C',
    borderRadius: helpers.normalize(25),
    margin: helpers.normalize(5),
  },
  activeTabText: {
    color: '#fff',
    fontFamily: PoppinsRegular,
  },
});
