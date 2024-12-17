const projectsData = [
    {
      id: 1,
      title: "Pixel Jackpot",
      description:
        "A 2D pixel art casino game featuring Blackjack, Roulette, Slot Machines, and more.",
      technologies: ["Unity", "C#", "Pixel Art"],
      details: "This game combines engaging casino gameplay with retro pixel art visuals.",
      images: [
        `${process.env.PUBLIC_URL}/projectImages/pixel1.jpg`,
        `${process.env.PUBLIC_URL}/projectImages/pixel2.jpg`,
        `${process.env.PUBLIC_URL}/projectImages/pixel3.jpg`,
        `${process.env.PUBLIC_URL}/projectImages/pixel4.jpg`,
        `${process.env.PUBLIC_URL}/projectImages/pixel5.jpg`,
        `${process.env.PUBLIC_URL}/projectImages/pixel6.jpg`,
      ],
      link: "https://play.unity.com/en/games/1872c98a-c89f-4805-b80f-324ab9f2b133/pixel-jackpot"
    },
    {
      id: 2,
      title: "Pinchr",
      description:
        "A fully responsive web app to manage expenses, budgets, and savings with visualized plans.",
      technologies: ["React", "Node.js", "CSS"],
      details:
        "Pinchr helps users efficiently plan and monitor their savings and budgets in an intuitive interface.",
        images: [
            `${process.env.PUBLIC_URL}/projectImages/pinchr1.jpg`,
            `${process.env.PUBLIC_URL}/projectImages/pinchr2.jpg`,
            `${process.env.PUBLIC_URL}/projectImages/pinchr3.jpg`,
            `${process.env.PUBLIC_URL}/projectImages/pinchr4.jpg`,
            `${process.env.PUBLIC_URL}/projectImages/pinchr5.jpg`,
          ],
          link: "https://github.com/andrewcesario1/ProjectPinchr"
    },
    {
      id: 3,
      title: "Online Tic-Tac-Toe Game",
      description:
        "A multiplayer Tic-Tac-Toe game you can play online with friends in real time.",
      technologies: ["React", "Socket.io", "Node.js"],
      details: "This project offers seamless multiplayer Tic-Tac-Toe gameplay with real-time updates.",
      images: [
        `${process.env.PUBLIC_URL}/projectImages/tictactoe1.jpg`,
        `${process.env.PUBLIC_URL}/projectImages/tictactoe2.jpg`,
        `${process.env.PUBLIC_URL}/projectImages/tictactoe3.jpg`,
      ],
      link: "https://github.com/camwolff02/CS4B-TicTacToe"
    },
  ];
  
  export default projectsData;
  