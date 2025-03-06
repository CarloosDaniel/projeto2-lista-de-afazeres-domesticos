import {View, Text, StyleSheet} from 'react-native'

type Props = {
  horario: string[],
  afazeres: string[]
}

export const Lista = (props: Props) => {
  return (
    <View>
      <Text style={styles.title}>{props.horario}</Text>
      <Text style= {styles.conteudo}>{props.afazeres}</Text>
    </View>
  )
}


const styles = StyleSheet.create ({
  title:{
    fontWeight:'bold',
    margin: 5,
  },
  conteudo: {
    marginLeft: 5,
  }
})