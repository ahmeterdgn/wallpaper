/* @flow */
import React, {
    Component
}
from 'react';
import {
    View,
    StyleSheet,
    Image,
    Linking,
    Share,
    PermissionsAndroid
}
from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Fab,
    Toast,
    Text,
    Root
}
from "native-base";
import WallPaperManager from '@ajaybhatia/react-native-wallpaper-manager';
import RNFetchBlob from 'rn-fetch-blob';
import {PAYLAS_YAZI,URL,URL_KATAGORI,COLOR_HEADER,KLASOR_ADI,COLOR_TITLE} from './bilgiler/bilgiler';

export async function request_storage_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Depolama İzni',
        'message': 'Uygulamanın Fotoğrafları indirmek için depolama alanınıza erişmesi gerekiyor.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      console.log("Storage Permission Granted.");
    }
    else {

      alert("Depolama İzni Verilmedi...");

    }
  } catch (err) {
    console.warn(err)
  }
}
export default class DETAY extends Component {
  constructor(props) {
          super(props);
          this.state = {
              showToast: false,
              active: false,
          };
          this._shareimg = this._shareimg.bind(this);
          this._showResult = this._showResult.bind(this);
          this.state = {
              result: ''
          };
          this._setwallpaper = this._setwallpaper.bind(this);

      }
      _showResult(result) {
          this.setState({
              result
          })
      }
      _shareimg() {
          Share.share({
              message: PAYLAS_YAZI,
          }).then(this._showResult);
      }
      _setwallpaper() {
          WallPaperManager.setWallpaper({
              uri: URL + this.props.navigation.state.params.veri
          }, res => Toast.show({
              text: "DUVAR KAĞIDI UYGULANDI!",
              position: "bottom",
              style: {
                  bottom: 40,
                  borderRadius: 80,
                  width: '60%',
                  left: '130%'
              }
          }))
      }

        async componentDidMount() {

      await request_storage_runtime_permission()

    }
//https://avatars2.githubusercontent.com/u/48730205?s=460&v=4

    downloadImage = () => {
      var date = new Date();
      var image_URL = URL+this.props.navigation.state.params.veri;
      var ext = this.getExtention(image_URL);
      ext = "." + ext[0];
      const { config, fs } = RNFetchBlob;
      let PictureDir = fs.dirs.PictureDir
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: PictureDir + "/"+KLASOR_ADI+"/image_" + Math.floor(date.getTime()
            + date.getSeconds() / 2) + ext,
          description: 'Image'
        }
      }
      config(options).fetch('GET', image_URL).then((res) => {
        Toast.show({
           text: "GÖRSEL İNDİRİLDİ!",
           position: "bottom",
           style: {
               bottom: 40,
               borderRadius: 80,
               width: '60%',
               left: '130%'
           }
       })
      });
    }

    getExtention = (filename) => {
      return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
        undefined;
    }

  render() {
    return (
      <Root>
      <Container style={styles.container}>
      <Header style={styles.header}>
         <Left>
           <Button transparent
           onPress={() =>  this.props.navigation.navigate("Sayfalar")}
           >
             <Icon name="arrow-back" />
           </Button>
         </Left>
         <Body>
           <Title style={styles.title}>Görüntüle</Title>
         </Body>
         <Right>
             <Button transparent
                  onPress={() =>
                    Toast.show({
                        text: "           YAPIM AŞAMASINDA!!",
                        position: "bottom",
                        style: {
                            bottom:40,
                            borderRadius:80,
                            width:'70%',
                            left: '100%'

                          }})
                        }>
                    <Icon name='heart'/>
                  </Button>
                </Right>
        </Header>

         <Image
         style={{flex:1}}
         source={{uri: URL+this.props.navigation.state.params.veri}}
         />
           <Fab
           active={this.state.active}
             direction="up"
             containerStyle={{ opacity: 1 }}
             style={styles.fab}
             position="bottomRight"
             onPress={() => this.setState({ active: !this.state.active })}>
             <Icon name="ios-checkmark" />
             <Button style={styles.fab}
             onPress={this.downloadImage}

             >
               <Icon name="ios-download" />
             </Button>
             <Button style={styles.fab}
             onPress={this._setwallpaper}
             >
               <Icon name="md-tablet-portrait"/>
             </Button>
             <Button style={styles.fab}
             onPress={this._shareimg}

             >
               <Icon name="share"/>
             </Button>
           </Fab>

      </Container>
      </Root>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: COLOR_HEADER,
  },
  title:{
    color:COLOR_TITLE
  },
  fab:{
    backgroundColor: COLOR_HEADER,

  }
});
