![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)

# Sarcastic 8-Ball
Do you have some burning questions you need answered? Are you also looking to be humbled? Look no further, the Sarcastic 8-Ball is your one-stop shop to do just that!

https://github.com/user-attachments/assets/deed1f71-51a3-4023-b946-d6f471922e49

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 12.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)
  
## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/linhpham4/Sarcastic-8-ball.git
```

### 2. Set Up Environment Variables

1. In the root of the client directory, you'll find a file named `.env.sample`.
2. Create a copy of this file and name it `.env`.
```bash
cp .env.sample .env
```
3. Open the `.env` file and fill in the required environment variables with your specific values.
4. Repeat the same steps for the server directory.
- I use 'http://localhost:8080' for the client side variable and '8080' for the server side port.

### 3. Install Dependencies

Install dependencies for both the server and client root directories:

```bash
npm install
```

### 4. Run the Application

Start both the server and client sides of the application.

1. In the server root directory, run:

```bash
node --watch server.js
```

2. In the client root directory, run:

```bash
npm run dev
```

### 5. Access the Application

Open the application in your browser (usually `http://localhost:5173/`) and ask away!

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check that your `.env` files are set up properly with all required variables.
3. Make sure no other processes are using the required ports.

For any other problems, please open an issue in the GitHub repository.

