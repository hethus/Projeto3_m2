import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();

const __dirname = path.resolve(path.dirname(""));
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));


const monstruario = [
    {
      id: 1,
      nome: "Bulbasaur",
      descricao:
        "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      tipo: "Planta",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      altura: "0.7",
      peso: "6.9",
      categoria: "Semente",
      habilidade: "Overgrow",
    },
    {
      id: 2,
      nome: "Charmander",
      descricao:
        "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
      tipo: "Fogo",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      altura: "0.6",
      peso: "8.5",
      categoria: "Lagarto",
      habilidade: "Blaze",
    },
    {
      id: 3,
      nome: "Squirtle",
      descricao:
        "Quando retrai seu longo pescoço em sua concha, esguicha água com uma vigorosa força.",
      tipo: "Água",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      altura: "0.5",
      peso: "9.0",
      categoria: "Pequena tartaruga",
      habilidade: "Torrent",
    },
];


app.get('/', (req, res) => {
    res.render('index', { monstruario });
});

app.get('/detalhes', (req, res) => {
    res.render('detalhes');
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
})

