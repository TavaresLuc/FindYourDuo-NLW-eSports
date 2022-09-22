import { ThemeProvider } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center', 
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    justifyContent: 'space-between',
  },
  logo: {
    width: 72,
    height: 48,
    marginTop: 40
  },
  right: {
    width: 20,
    height: 20
  },
  back: {
    marginLeft: 5,
  },
  cover: {
    width: 200,
    height: 100,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {
    width: '100%',
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },
  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});