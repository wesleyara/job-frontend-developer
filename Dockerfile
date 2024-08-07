# Use uma imagem base oficial do Node.js
FROM node:20

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Execute o build do projeto
RUN npm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Defina o comando para rodar a aplicação
CMD ["npm", "start"]