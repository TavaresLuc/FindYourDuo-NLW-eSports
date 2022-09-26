import { SafeAreaView, Image, View } from "react-native"
import Background from "../../components/Background";
import { styles } from './styles';
import { useRoute, useNavigation } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { Entypo } from '@expo/vector-icons';
import { THEME } from "../../theme";
import logoImg from '../../assets/logo-nlw-esports.png';
import { useEffect, useState} from 'react';
import { Text, TouchableOpacity } from "react-native";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { FlatList } from "react-native";
import { DuoMatch } from "../../components/DuoMatch"; 


export function Game() 
  {

    const [discordDuoSelected, setDiscordDuoSelected] = useState('');

    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    
    const navigation = useNavigation();
    const route = useRoute();
    const game = route.params as GameParams;
    console.log(game);

    function handleGoBack(){
      navigation.goBack();
    }

    async function getDiscordUser(adsId: string) {
      useEffect(() => {
        fetch(`http://192.168.0.8:3333/games/${adsId}/ads`)
        .then((response) => response.json())
        .then(data => setDiscordDuoSelected(data.discord));
      }, []);
    }

    useEffect(() => {
      fetch(`http://192.168.0.8:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then(data => setDuos(data));
    }, []);

    return (
        <Background> 
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>

          <TouchableOpacity onPress={handleGoBack}>
            <Entypo style={styles.back} name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20} />

          </TouchableOpacity>

        <Image source={logoImg} style={styles.logo} />


        <View style={styles.right}></View>
        </View>

        <Image source={{uri: game.bannerUrl}} style={styles.cover} />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!"/>
        
        <FlatList data={duos} 
        keyExtractor={item => item.id} 
        renderItem={({item}) => (

        <DuoCard data={item} onConnect={() => getDiscordUser(item.id)}/>
        )}
        horizontal
        style={styles.containerList}
        contentContainerStyle={[duos.length >0 ? styles.contentList : styles.emptyListContent]}
        showsHorizontalScrollIndicator={false} 
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Não há anúncios publicados ainda.
          </Text>
        )}
        />

        <DuoMatch 
        visible={discordDuoSelected.length > 0}
        discord="Tavares#2342"
        onClose={() => setDiscordDuoSelected('')}/>
      </SafeAreaView>
      </Background> 
    );
  }
