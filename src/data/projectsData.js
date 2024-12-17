const getImagePath = (fileName) => {
    // Use process.env.PUBLIC_URL and test both jpg and JPG
    const basePath = `${process.env.PUBLIC_URL}/projectImages/`;
    return [
      `${basePath}${fileName}.jpg`,
      `${basePath}${fileName}.JPG`
    ];
  };
  
  const projectsData = [
    {
      id: 1,
      title: "Pixel Jackpot",
      description:
        "A 2D pixel art casino game featuring Blackjack, Roulette, Slot Machines, and more.",
      technologies: ["Unity", "C#", "Pixel Art"],
      details: "This game combines engaging casino gameplay with retro pixel art visuals.",
      images: [
        ...getImagePath("pixel1"),
        ...getImagePath("pixel2"),
        ...getImagePath("pixel3"),
        ...getImagePath("pixel4"),
        ...getImagePath("pixel5"),
        ...getImagePath("pixel6"),
      ],
      link: "https://play.unity.com/en/games/1872c98a-c89f-4805-b80f-324ab9f2b133/pixel-jackpot",
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
        ...getImagePath("pinchr1"),
        ...getImagePath("pinchr2"),
        ...getImagePath("pinchr3"),
        ...getImagePath("pinchr4"),
        ...getImagePath("pinchr5"),
      ],
      link: "https://github.com/andrewcesario1/ProjectPinchr",
    },
    {
      id: 3,
      title: "Online Tic-Tac-Toe Game",
      description:
        "A multiplayer Tic-Tac-Toe game you can play online with friends in real time.",
      technologies: ["React", "Socket.io", "Node.js"],
      details:
        "This project offers seamless multiplayer Tic-Tac-Toe gameplay with real-time updates.",
      images: [
        ...getImagePath("tictactoe1"),
        ...getImagePath("tictactoe2"),
        ...getImagePath("tictactoe3"),
      ],
      link: "https://github.com/camwolff02/CS4B-TicTacToe",
    },
  ];
  
  export default projectsData;
  