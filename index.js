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
      desastre: 1,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: false,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
    {
      id: 2,
      nome: "Bulbasaur",
      desastre: 2,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: false,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
    {
      id: 3,
      nome: "Bulbasaur",
      desastre: 3,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: false,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
    {
      id: 4,
      nome: "Bulbasaur",
      desastre: 4,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: false,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
    {
      id: 5,
      nome: "Bulbasaur",
      desastre: 5,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: false,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
    {
      id: 6,
      nome: "Bulbasaur",
      desastre: 6,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: false,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
    {
      id: 7,
      nome: "BulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaurBulbasaur BulbasaurBulbasaurBulbasaur",
      desastre: 6,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: false,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
    {
      id: 8,
      nome: "Bulbasaur",
      desastre: 6,
      idade: 50,
      altura: 0.7,
      peso: 6.9,
      agressivo: true,
      sexo: "Masculino",
      raca: "Planta",
      pesquisador: "Professor Oak",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
      caracteristicas: "Semente",
    },
];


app.get('/', (req, res) => {
    res.render('index', { monstruario });
});

app.get("/detalhes/:id", (req, res) => {
  let monstro;
  monstruario.filter((element) => {
    if (element.id == req.params.id) {
      monstro = element;
    }
  });
  res.render("detalhes", { monstro });
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
})

