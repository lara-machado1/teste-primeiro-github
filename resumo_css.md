# Resumo de CSS 

Nesta aula, aprendi como o CSS funciona na prática e como ele é essencial para deixar um site bonito e organizado. Abaixo, resumi os pontos principais da atividade.

---

## O que é o CSS e para que serve?

O **CSS (Cascading Style Sheets)** é a linguagem que usamos para dar estilo às nossas páginas. Se o HTML é o "esqueleto" do site, o CSS é a "roupa", as cores e o visual.

### Por que usamos o arquivo externo `style.css`?
Aprendi que o mais recomendado é criar um arquivo separado (externo) porque:
* **Organização:** O código HTML não fica "poluído" com estilos, ficando mais fácil de ler.
* **Praticidade:** Se eu quiser mudar a cor de todos os títulos do meu site, eu mudo em um só lugar (no arquivo .css) e ele atualiza todas as páginas de uma vez. É muito mais rápido!

---

## Glossário de Propriedades (Modelo de Caixa)

Entender o **Box Model** (Modelo de Caixa) foi bem importante para saber como os elementos se comportam na tela.

* **color**: Serve para mudar a cor da letra (do texto).
* **background-color**: Define a cor de fundo de uma caixa ou de uma seção.
* **margin**: É o espaço do lado de **fora** do elemento. Serve para empurrar os vizinhos e criar distância entre as coisas.
* **padding**: É o espaço do lado de **dentro**. Ele serve para dar um "respiro" entre o conteúdo (como um texto) e a borda da caixa.
* **display: flex**: É uma ferramenta incrível para alinhar os elementos. Com ela, consigo colocar coisas uma do lado da outra ou centralizar tudo de um jeito bem simples.



---

## Como as "Classes" ajudam?

As **classes** no CSS são como etiquetas que colocamos nas tags HTML. 

**Por que elas são úteis?**
Imagine que eu tenha 10 parágrafos no meu site, mas quero que apenas 2 deles sejam azuis e grandes. Em vez de mudar todos os parágrafos, eu crio uma classe chamada `.texto-destaque` no CSS e coloco essa "etiqueta" apenas nos parágrafos que eu quero. Isso ajuda a manter o código organizado e evita que eu tenha que repetir o mesmo estilo várias vezes.

---

## Exemplo que pratiquei:

```css
/* Exemplo de uma classe com as propriedades que aprendi */
.meu-card {
    background-color: lightgrey;
    color: black;
    padding: 15px;
    margin: 20px;
    display: flex;
}