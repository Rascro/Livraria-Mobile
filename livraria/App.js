import {StatusBar,Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import Counter from './components/Counter';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        style={{ resizeMode: 'stretch', width: '45%', height: 210 }} source={{ uri: props.livro.capa }}
      />
      <View style={{flex: 1}}>
        <Text style={{ fonWeigth: 'bold', textAlign: 'center', fontSize: 20 }}> {props.livro.titulo} </Text>
        <Text style={{ textAlign: 'center', fontSize: 15, }}> R$ {props.livro.preco} </Text>
      <Counter />
      </View>
    </View>
  );
}

export default function App() {
  const livros = [
    {
      capa: "https://m.media-amazon.com/images/I/51gsn73sRdL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      titulo: 'Princesa das cinzas',
      preco: 65.90,
    },
    {
      capa: "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/308/407/products/capas-jpg-sempre-1000x150021-ca5dc6790f213a637116722488318543-640-0.jpg",
      titulo: 'Livro da vida',
      preco: 55.00,
    },
    {
      capa: "https://static.wikia.nocookie.net/ordemparanormal/images/a/a1/Arte_de_Campanha_-_Os_Espinhos_da_Aurora_Escarlate.jpg/revision/latest?cb=20220303172550&path-prefix=pt-br",
      titulo: 'Ordem Paranormal',
      preco: 139.90,
    },
    {
      capa: "https://m.media-amazon.com/images/I/51YZZ3waLlL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      titulo: 'Novel Toradora',
      preco: 29.90,
    },
    {
      capa: "https://m.media-amazon.com/images/I/51muYOKh23L._SX359_BO1,204,203,200_.jpg",
      titulo: 'Nove cartas sobre a divina comédia',
      preco: 59,
    },
    {
      capa: "https://m.media-amazon.com/images/I/51yvcUb5tFL._SY346_.jpg",
      titulo: 'Percy Jackson',
      preco: 19.95,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fonWeigth: 'bold', textAlign: 'center' }}>Livros</Text>
      <ScrollView>
      <View style={styles.conteudo}>
        {
          livros.map(livro => <Card livro={livro} />)
        }
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignitems: 'center',
    paddingTop: 20,
    marginTop: 30,
    backgroundColor: '#B22222',
  },
  conteudo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ccc',
    paddingTop: 15,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#800000',
  },
  card: {
    width: '97%',
    height: 210,
    backgroundColor: '#FF6347',
    margin: 5,
    flexDirection:'row'    
  }
});
