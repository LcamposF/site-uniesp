# 🎓 UNIESP - Portal Institucional

Este projeto é um **portal institucional desenvolvido em React**, que simula o site de uma faculdade — **UNIESP**. O sistema foi criado com o objetivo de fornecer informações sobre a instituição, suas práticas de privacidade (LGPD), além de um portal de notícias com uma área administrativa simples.

---

## 🚀 Tecnologias Utilizadas

- **React**
- **React Router DOM**
- **React Bootstrap**
- **Axios**
- **JSON Server** (para simular uma API local de notícias)

---

## 🎯 Funcionalidades

### 🔹 Página Inicial (`Inicial.jsx`)

- ✅ Apresenta um resumo da faculdade, seus diferenciais e parcerias.
- ✅ Inclui um **carrossel de banners** com campanhas institucionais.
- ✅ Cards com informações sobre:
  - Vida no campus.
  - Biblioteca.
  - Estrutura do prédio principal.
  - Parcerias com empresas.
  - Compromisso com a educação.

![image](https://github.com/user-attachments/assets/e0e208c7-bf0e-4815-af4f-14e70147b55f)

---

### 🔹 Página “A Faculdade” (`Faculdade.jsx`)

- ✅ Fornece informações sobre a história, missão e estrutura da faculdade.
- ✅ Cards ilustrativos destacam:
  - Vida no campus.
  - Biblioteca.
  - Estrutura física moderna.

![image](https://github.com/user-attachments/assets/cfa9ee3b-d916-4620-9f49-8bc3f3e91e2a)


---

### 🔹 Página DPO e LGPD (`DpoLgpd.jsx`)

- ✅ Explica a **Lei Geral de Proteção de Dados (LGPD)**.
- ✅ Aborda o papel do **DPO (Data Protection Officer)** na proteção de dados.
- ✅ Inclui três cards temáticos:
  - Compliance e Legislação.
  - Gestão de Dados.
  - Confiança e Transparência.

![image](https://github.com/user-attachments/assets/4d998dcc-59ca-4078-bfbe-8c36e8d6e25f)


---

### 🔹 Página de Notícias (`Noticias.jsx`)

- ✅ Consome uma API local simulada (**JSON Server**).
- ✅ Lista notícias cadastradas, exibindo título e imagem ilustrativa.
- ✅ Cada notícia possui um link **“Ler mais”** que direciona para sua página detalhada.

![image](https://github.com/user-attachments/assets/7da9a784-b355-407a-9764-025aa0714426)


---

### 🔹 Página de Visualização de Notícias (`VisualizaNoticia.jsx`)

- ✅ Exibe os detalhes completos de uma notícia selecionada, com título e texto.

![image](https://github.com/user-attachments/assets/ead62b64-9c7a-42b2-ac9a-96ae64a09607)


---

### 🔹 Área Admin de Notícias

- ⚙️ Em andamento...

---

## 🧩 Componentes Reutilizáveis

### 🔸 **BannerAd (`BannerAd.jsx`)**
- 🔁 Carrossel de banners utilizando `React Bootstrap`.
- 🎯 Exibe imagens promocionais ou institucionais.
- ✔️ Responsivo e de fácil modificação.

![image](https://github.com/user-attachments/assets/3670729f-61d9-43fc-9918-ba88089983ba)


---

### 🔸 **CustomNavbar (`CustomNavbar.jsx`)**
- 🧭 Barra de navegação fixa no topo com:
  - Logotipo da instituição.
  - Links para as principais páginas.
  - Menu lateral responsivo (Offcanvas) para telas menores.
- ✔️ Desenvolvido com `React Bootstrap` e `React Router`.

![image](https://github.com/user-attachments/assets/2d7cb924-cb87-48ed-bf43-78d352d9e8de)
![image](https://github.com/user-attachments/assets/11b8f365-5df5-4b05-b4b9-29bd29dcd37e)



---

## 💻 Como rodar o projeto localmente

### 1️⃣ Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
