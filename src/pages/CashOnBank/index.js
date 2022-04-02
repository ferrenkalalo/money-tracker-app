import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput} from '../../components';
import Gap from '../../components/atoms/Gap';

const CashOnBank = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Cash On Bank"
        onBack={() => {
          navigation.goBack();
        }}
      />
      <Gap height={24} />
      <View style={styles.container}>
        <TextInput title="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput title="Type" placeholder="Debit / Credit" />
        <Gap height={22} />
        <Button title="Save" />
      </View>
      <Gap height={24} />
      <View style={styles.container}>
        <Text style={styles.Text}>Last 3 Transactions</Text>
        <Gap height={10} />
        <View style={styles.box}>
          <Text style={styles.subText}>Transaction 1</Text>
        </View>
        <Gap height={10} />
        <View style={styles.box}>
          <Text style={styles.subText}>Transaction 2</Text>
        </View>
        <Gap height={10} />
        <View style={styles.box}>
          <Text style={styles.subText}>Transaction 3</Text>
        </View>
      </View>
    </View>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 26,
  },
  box: {
    flex: 0.3,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
  },
  Text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontWeight: '700',
  },
  subText: {
    paddingLeft: 20,
    paddingTop: 7,
  },
});
