const htmlcores = [
  { nome: "Branco", hex: "#FFFFFF" },
  { nome: "Preto", hex: "#000000" },
  { nome: "Vermelho", hex: "#FF0000" },
  { nome: "Verde", hex: "#00FF00" },
  { nome: "Azul", hex: "#0000FF" },
  { nome: "Amarelo", hex: "#FFFF00" },
  { nome: "Laranja", hex: "#FFA500" },
  { nome: "Roxo", hex: "#800080" },
  { nome: "Rosa", hex: "#FFC0CB" },
  { nome: "Marrom", hex: "#A52A2A" },
  { nome: "Cinza", hex: "#808080" },
  { nome: "Turquesa", hex: "#40E0D0" },
  { nome: "Ciano", hex: "#00FFFF" },
  { nome: "Magenta", hex: "#FF00FF" },
  { nome: "Prata", hex: "#C0C0C0" },
  { nome: "Dourado", hex: "#FFD700" },
  { nome: "Indigo", hex: "#4B0082" },
  { nome: "Violeta", hex: "#EE82EE" },
  { nome: "Coral", hex: "#FF7F50" },
  { nome: "Lavanda", hex: "#E6E6FA" },
  { nome: "Azeitona", hex: "#808000" },
  { nome: "Azul Marinho", hex: "#000080" },
  { nome: "Azul Celeste", hex: "#87CEEB" },
  { nome: "Pêssego", hex: "#FFE5B4" },
  { nome: "Verde Limão", hex: "#00FF00" },
  { nome: "Bege", hex: "#F5F5DC" },
  { nome: "Bordô", hex: "#800000" },
  { nome: "Aqua", hex: "#00FFFF" },
  { nome: "Verde Oliva", hex: "#6B8E23" },
  { nome: "Lilás", hex: "#C8A2C8" },
  { nome: "Mauve", hex: "#E0B0FF" },
  { nome: "Mostarda", hex: "#FFDB58" },
  { nome: "Turquesa Escura", hex: "#00CED1" },
  { nome: "Verde Esmeralda", hex: "#008000" },
  { nome: "Índigo", hex: "#4B0082" },
  { nome: "Rosa Choque", hex: "#FF1493" },
  { nome: "Coral Claro", hex: "#F08080" },
  { nome: "Vermelho Indiano", hex: "#CD5C5C" },
  { nome: "Cinza Escuro", hex: "#A9A9A9" },
  { nome: "Dourado Antigo", hex: "#CFB53B" },
  { nome: "Lavanda Rosada", hex: "#FFF0F5" },
  { nome: "Lima", hex: "#00FF00" },
  { nome: "Malva", hex: "#BA55D3" },
  { nome: "Azul Royal", hex: "#4169E1" },
  { nome: "Oliva Escuro", hex: "#556B2F" },
  { nome: "Periwinkle", hex: "#CCCCFF" },
  { nome: "Turquesa Médio", hex: "#48D1CC" },
  { nome: "Damasco", hex: "#FFB6C1" },
  { nome: "Verde Floresta", hex: "#228B22" },
  { nome: "Verde Mar", hex: "#2E8B57" },
  { nome: "Orquídea", hex: "#DA70D6" },
  { nome: "Pérola", hex: "#F0F0F0" },
  { nome: "Prímula", hex: "#FFDAB9" },
  { nome: "Rosa Claro", hex: "#FFB6C1" },
  { nome: "Verde Menta", hex: "#98FF98" },
  { nome: "Azul Aço", hex: "#4682B4" },
  { nome: "Bronze", hex: "#CD7F32" },
  { nome: "Chocolate", hex: "#D2691E" },
  { nome: "Azul Claro", hex: "#ADD8E6" },
  { nome: "Verde Limão", hex: "#32CD32" },
  { nome: "Cinza Claro", hex: "#D3D3D3" },
  { nome: "Ouro", hex: "#FFD700" },
  { nome: "Lavanda Escura", hex: "#6A5ACD" },
  { nome: "Jade", hex: "#00A86B" },
  { nome: "Melancia", hex: "#F08080" },
  { nome: "Azul Meia-Noite", hex: "#191970" },
  { nome: "Creme", hex: "#FFFDD0" },
  { nome: "Verde Musgo", hex: "#ADFF2F" },
  { nome: "Coral Pálido", hex: "#FFE4C4" },
  { nome: "Pêssego Pálido", hex: "#FFE5B4" },
  { nome: "Papaya", hex: "#FFEFD5" },
  { nome: "Pérola", hex: "#FAEBD7" },
  { nome: "Rosa Indiano", hex: "#CD5B45" },
  { nome: "Salmao", hex: "#FA8072" },
  { nome: "Siena", hex: "#A0522D" },
  { nome: "Azul-Aço", hex: "#4682B4" },
  { nome: "Lavanda Cinza", hex: "#C4C3D0" },
  { nome: "Limão", hex: "#ADFF2F" },
  { nome: "Lima-Limão", hex: "#BFFF00" },
  { nome: "Cinza Azulado", hex: "#6699CC" },
  { nome: "Azul Anil", hex: "#6600FF" },
  { nome: "Areia", hex: "#F4A460" },
  { nome: "Ciano Claro", hex: "#E0FFFF" },
  { nome: "Coral Escuro", hex:"#FF4040" },
  { nome: "Ciano Escuro", hex: "#008B8B" },
  { nome: "Cinza Escuro", hex: "#666699" },
  { nome: "Marfim", hex: "#FFFFF0" },
  { nome: "Verde Jade", hex: "#00A86B" },
  { nome: "Verde Kelly", hex: "#4CBB17" },
  { nome: "Verde Mar", hex: "#2E8B57" },
  { nome: "Verde Militar", hex: "#556B2F" },
  { nome: "Azul Ardósia", hex: "#6A5ACD" },
  { nome: "Orquídea Escura", hex: "#9932CC" },
  { nome: "Rosa Choque", hex: "#FF007F" },
  { nome: "Ciano Escuro", hex: "#00CED1" },
  { nome: "Fúcsia", hex: "#FF00FF" },
  { nome: "Verde Neon", hex: "#39FF14" },
  { nome: "Laranja Escuro", hex: "#FF8C00" },
  { nome: "Azul Petróleo", hex: "#008080" },
  { nome: "Rosa Pálido", hex: "#FADADD" },
  { nome: "Amêndoa", hex: "#FFEBCD" },
  { nome: "Azul Bebê", hex: "#89CFF0" },
  { nome: "Azul Cadete", hex: "#5F9EA0" },
  { nome: "Verde Cadete", hex: "#7FFF00" },
  { nome: "Vermelho Cadete", hex: "#E34234" },
  { nome: "Rosa Profundo", hex: "#FF1493" },
  { nome: "Amarelo Profundo", hex: "#FFD700" },
  { nome: "Verde Profundo", hex: "#008000" },
  { nome: "Azul Profundo", hex: "#00008B" },
  { nome: "Orquídea Médio", hex: "#BA55D3" },
  { nome: "Violeta Médio", hex: "#9370DB" },
  { nome: "Verde Médio", hex: "#66CDAA" },
  { nome: "Verde Mar Médio", hex: "#3CB371" },
  { nome: "Rosa Médio", hex: "#FF66CC" },
  { nome: "Verde Oliva Médio", hex: "#BDB76B" },
  { nome: "Violeta Palido", hex: "#DB7093" },
  { nome: "Pêssego Palido", hex: "#FFE5B4" },
  { nome: "Rosa Palido", hex: "#FFD1DC" },
  { nome: "Verde Mar Palido", hex: "#98FB98" },
  { nome: "Turquesa Palido", hex: "#AFEEEE" },
  { nome: "Amarelo Palido", hex: "#FAFAD2" },
  { nome: "Oliva Palido", hex: "#EEE8AA" },
  { nome: "Violeta Vermelho", hex: "#C71585" },
  { nome: "Rosa Quente", hex: "#FF69B4" },
  { nome: "Amarelo Quente", hex: "#FFD700" },
  { nome: "Verde Quente", hex: "#ADFF2F" },
  { nome: "Azul Quente", hex: "#4682B4" },
  { nome: "Orquídea Rosa", hex: "#DA70D6" },
  { nome: "Laranja Rosa", hex: "#FF4500" },
  { nome: "Rosa Choque", hex: "#FF1493" },
  { nome: "Limão Rosa", hex: "#32CD32" },
  { nome: "Ouro Rosa", hex: "#B76E79" },
  { nome: "Cerceta", hex: "#008080" },
  { nome: "Tulipa", hex: "#FF878D" },
  { nome: "Alizarina", hex: "#E32636" },
  { nome: "Almendra", hex: "#EED9C4" },
  { nome: "Âmbar", hex: "#FFBF00" },
  { nome: "Ameixa", hex: "#8E4585" },
  { nome: "Pêssego", hex: "#FFDAB9" },
  { nome: "Verde Pino", hex: "#01796F" },
  { nome: "Framboesa", hex: "#E30B5D" },
  { nome: "Rubi", hex: "#E0115F" },
  { nome: "Ferrugem", hex: "#B7410E" }
];

// Criando um subvetor com pelo menos 10 cores
const cor_selecionada = htmlcores.slice(0, 10);

// Mostrando as cores selecionadas para o usuário
const colorsDiv = document.getElementById("colors");
cor_selecionada.forEach(color => {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = color.hex;
  colorsDiv.appendChild(square);
});

// Selecionando uma cor aleatória
const cpu = cor_selecionada[Math.floor(Math.random() * cor_selecionada.length)];
console.log(cpu.nome);
let Tentativa = 3;


function checkGuess() {
  const textodigitado = document.getElementById("guessInput");
  const escolha = textodigitado.value.trim();
  const resultado = document.getElementById("result");
  const tentativas = document.getElementById("Tentativa");

  if (Tentativa > 0) {
    if (escolha.toLowerCase() === cpu.nome.toLowerCase()) {
      resultado.textContent = "Parabéns! Você acertou!";
      document.body.style.backgroundColor = cpu.hex;
    } else {
      Tentativa--;
      tentativas.textContent = Tentativa;
      if (Tentativa === 0) {
        resultado.textContent = `Acabaram as tentativas! A cor era ${cpu.nome}. Você perdeu.`;
      } else {
        resultado.textContent = `Tente novamente! Tentativas restantes: ${Tentativa}`;
      }
    }
  } else {
    resultado.textContent = `Acabaram as tentativas! A cor era ${cpu.nome}. Você perdeu.`;
  }
}