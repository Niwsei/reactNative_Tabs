import { View, Text ,StyleSheet , Linking ,Button , Alert } from 'react-native'
import React , {useCallback} from 'react'
import { Link } from 'expo-router'


const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';

const OpenURLButton = ({url, children}) => {  // url ເເມ່ນຮັບຄ່າມາຈາກ  supportedURL ເເລະ unsupportedURL , children ເເມ່ນຮັບຄ່າຈາກ jsx
  const handlePress = useCallback(async () => {     // useCallback ເເມ່ນການເຮັດວຽກຕາມລຳດັບ

    const supported = await Linking.canOpenURL(url);

    if (supported) {                    // Linking.canOpenURL ເເມ່ນກວດເບີ່ງວ່າ url ເປີດໄດ້ຫລືບໍ່

      await Linking.openURL(url);  // Linking.openURL ເເມ່ນການພະຍາຍາມເປີດ url ໂດຍບໍ່ໄດ້ກວດສອບ
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);  [url] // ໃສ່ເພື່ອການ optimize  function handlePress ເພື່ອບໍ່ໃຫ້ສ້າງໄຫມ່ທຸກຄັ້ງທີ່ component render

  return <Button title={children} onPress={handlePress} />;
};


const search = () => {
  return (
    <View style={styles.container}>
    <Link href="/" style={{backgroundColor:"red" , color:"white" , padding:7 , borderRadius:5 , marginBottom:18 , fontWeight:"600" , fontSize:18}}> Go to index</Link>

    <OpenURLButton url={supportedURL}>Open Supported URL </OpenURLButton> {/* url={supportedURL} ເເມ່ນ ການສົ່ງຄ່າຕົວເເປລ supportedURL ໄປໃຫ້ parameter url, ສ່ວນ ຕົວຫນັງສື Open Supported URL ເເມ່ນ jsx ທີ່ສົ່ງໄປໃຫ້ children */}
    <hr/>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  )
}

export default search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "pink",
  }
})