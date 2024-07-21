import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingVertical: '10%',
    backgroundColor: '#F3EAFB',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  androidPadding: {
    paddingTop: 20, // Adjust this value as needed
  },
  questionContainer: {
    width: width - 40,
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
  subtitle: {
    fontSize: 18,
    color: '#2F4F4F',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionSelected: {
    backgroundColor: '#8A2BE2',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#2F4F4F',
  },
  optionTextSelected: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotActive: {
    width: 10,
    height: 10,
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default styles;
