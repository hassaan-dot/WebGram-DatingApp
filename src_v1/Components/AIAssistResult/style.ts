import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { PoppinsMedium, RobotoMedium } from '../../Resources/fonts';
export const styles = StyleSheet.create({
  aiAssistOuterContainer: {
    paddingVertical: helpers.normalize(20),
    borderRadius: helpers.normalize(8),
  },
  aiAssistTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: helpers.normalize(8),
  },
  aiIconImage: {
    width: helpers.normalize(24),
    height: helpers.normalize(24),
    marginRight: helpers.normalize(8),
  },
  aiAssistTitle: {
    fontSize: helpers.normalize(10),
    fontFamily:PoppinsMedium,
    color: '#F5169C',
  },
  aiAssist: {
    padding: helpers.normalize(16),
    backgroundColor: '#FFEFF6',
    borderRadius: helpers.normalize(8),
    marginBottom: helpers.normalize(16),
    paddingHorizontal:helpers.normalize(19)
  },
  aiAssistPlaceholder: {
    fontSize: helpers.normalize(12),
    lineHeight:helpers.normalize(22),
    fontFamily:RobotoMedium,
    color: '#959EAE',
    textAlignVertical:'top',
    paddingVertical:2
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonLeftContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },

  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageIndicator: {
    fontSize: helpers.normalize(16),
    color: '#F5169C',
  },
  buttonRightContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  refreshIconButton: {
    backgroundColor: '#FFEAF7',
    borderRadius: helpers.normalize(10),
    padding: helpers.normalize(12),
    marginRight: helpers.normalize(5),
  },
  refreshIcon: {
    width: helpers.normalize(20),
    height: helpers.normalize(20),
  },
  captionButton: {
    backgroundColor: '#FFEAF7',
    padding: helpers.normalize(10),
    paddingVertical: helpers.normalize(5),
    borderWidth: 1,
    borderColor: '#F5169C',
    borderRadius: helpers.normalize(10),
  },
  captionText: {
    color: '#F5169C',
    fontSize: helpers.normalize(12),
  },
  pagination_arrows:{
    width: helpers.normalize(20),
    height: helpers.normalize(20),
  }
});
