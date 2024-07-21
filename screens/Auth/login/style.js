import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E65791',
  },
  topContainer: {
    width: screenWidth,
    height: screenHeight * 0.3,
    backgroundColor: '#AB3A96',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  curvedBackground: {
    position: 'absolute',
    bottom: 10,
    width: screenWidth,
    height: screenHeight * 0.5,
    backgroundColor: '#E65791',
    zIndex: -1,
    borderBottomLeftRadius: screenWidth / 1.5,
    borderBottomRightRadius: screenWidth / 1.5,
  },
  textinput: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    paddingLeft: 55,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textinputinlineimage: {
    position: 'absolute',
    zIndex: 1,
    top: 38,
    left: 20,
  },
  box: {
    width: '100%',
    zIndex: 0,
    backgroundColor: '#AB3A96',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  image: {
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#333333',
    padding: 13,
    width: 124,
    alignItems: 'center',
    borderRadius: 50,
  },
  title: {
    marginTop: 30,
    fontSize: 40,
    color: 'white',
  },
  whitetext: {
    color: 'white',
    fontSize: 17,
    marginVertical: 15,
  },
  whiteBoldUnderlinedText: {
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
  whiteBold: {
    color: 'white',
    fontSize: 17,
  },
});
