import { ImageBackground } from 'react-native';
import { styles } from './styles';
import backgroundImg from '../../assets/background-galaxy.png'


interface Props {
  children: React.ReactNode;
}

export default function Background({ children }: Props) {0
  return (
    <ImageBackground  source={backgroundImg} style={styles.container} defaultSource={backgroundImg}>
      {children}
    </ImageBackground>

  );
}