export var stats = {
  monsters: {
    "Ancient Artillery": {
      image: "Ancient-Artillery.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 4,
            move: 0,
            attack: 2,
            range: 4,
            attributes: []
          },
          elite: {
            health: 7,
            move: 0,
            attack: 3,
            range: 5,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 6,
            move: 0,
            attack: 2,
            range: 4,
            attributes: []
          },
          elite: {
            health: 9,
            move: 0,
            attack: 3,
            range: 5,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 7,
            move: 0,
            attack: 2,
            range: 5,
            attributes: []
          },
          elite: {
            health: 11,
            move: 0,
            attack: 3,
            range: 6,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 8,
            move: 0,
            attack: 3,
            range: 5,
            attributes: []
          },
          elite: {
            health: 13,
            move: 0,
            attack: 4,
            range: 6,
            attributes: []
          }
        },
        {
          level: 4,
          normal: {
            health: 9,
            move: 0,
            attack: 4,
            range: 5,
            attributes: []
          },
          elite: {
            health: 13,
            move: 0,
            attack: 4,
            range: 6,
            attributes: ["%target% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 11,
            move: 0,
            attack: 4,
            range: 6,
            attributes: []
          },
          elite: {
            health: 15,
            move: 0,
            attack: 4,
            range: 7,
            attributes: ["%target% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 14,
            move: 0,
            attack: 4,
            range: 6,
            attributes: []
          },
          elite: {
            health: 16,
            move: 0,
            attack: 5,
            range: 7,
            attributes: ["%target% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 16,
            move: 0,
            attack: 4,
            range: 7,
            attributes: []
          },
          elite: {
            health: 20,
            move: 0,
            attack: 5,
            range: 7,
            attributes: ["%target% 2"]
          }
        }
      ]
    },
    "Bandit Archer": {
      image: "Bandit Archer.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 4,
            move: 2,
            attack: 2,
            range: 3,
            attributes: []
          },
          elite: {
            health: 6,
            move: 2,
            attack: 3,
            range: 3,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 4,
            attributes: []
          },
          elite: {
            health: 7,
            move: 2,
            attack: 3,
            range: 5,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 6,
            move: 3,
            attack: 2,
            range: 4,
            attributes: []
          },
          elite: {
            health: 9,
            move: 3,
            attack: 3,
            range: 5,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 6,
            move: 3,
            attack: 3,
            range: 4,
            attributes: []
          },
          elite: {
            health: 10,
            move: 3,
            attack: 4,
            range: 5,
            attributes: []
          }
        },
        {
          level: 4,
          normal: {
            health: 8,
            move: 3,
            attack: 3,
            range: 4,
            attributes: []
          },
          elite: {
            health: 10,
            move: 3,
            attack: 4,
            range: 6,
            attributes: ["%poison%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 10,
            move: 3,
            attack: 3,
            range: 5,
            attributes: []
          },
          elite: {
            health: 12,
            move: 4,
            attack: 4,
            range: 6,
            attributes: ["%poison%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 10,
            move: 3,
            attack: 4,
            range: 5,
            attributes: []
          },
          elite: {
            health: 13,
            move: 4,
            attack: 5,
            range: 6,
            attributes: ["%poison%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 13,
            move: 3,
            attack: 4,
            range: 5,
            attributes: []
          },
          elite: {
            health: 17,
            move: 4,
            attack: 5,
            range: 6,
            attributes: ["%poison%"]
          }
        }
      ]
    },
    "Bandit Guard": {
      image: "Bandit Guard.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 9,
            move: 2,
            attack: 3,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 6,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 9,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 6,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 9,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%shield% 2"]
          }
        },
        {
          level: 4,
          normal: {
            health: 10,
            move: 4,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 11,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%muddle%", "%shield% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 11,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 12,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%muddle%", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 14,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 14,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%muddle%", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 16,
            move: 5,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 14,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%muddle%", "%shield% 3"]
          }
        }
      ]
    },
    "Black Imp": {
      image: "Black-Imp.jpg",
      hasTen: true,
      level: [
        {
          level: 0,
          normal: {
            health: 3,
            move: 1,
            attack: 1,
            range: 3,
            attributes: []
          },
          elite: {
            health: 4,
            move: 1,
            attack: 2,
            range: 3,
            attributes: ["%poison%"]
          }
        },
        {
          level: 1,
          normal: {
            health: 4,
            move: 1,
            attack: 1,
            range: 3,
            attributes: ["%poison%"]
          },
          elite: {
            health: 6,
            move: 1,
            attack: 2,
            range: 3,
            attributes: ["%poison%"]
          }
        },
        {
          level: 2,
          normal: {
            health: 5,
            move: 1,
            attack: 1,
            range: 4,
            attributes: ["%poison%"]
          },
          elite: {
            health: 8,
            move: 1,
            attack: 2,
            range: 4,
            attributes: ["%poison%"]
          }
        },
        {
          level: 3,
          normal: {
            health: 5,
            move: 1,
            attack: 2,
            range: 4,
            attributes: ["%poison%"]
          },
          elite: {
            health: 8,
            move: 1,
            attack: 3,
            range: 4,
            attributes: ["Attackers gain Disadvantage", "%poison%"]
          }
        },
        {
          level: 4,
          normal: {
            health: 7,
            move: 1,
            attack: 2,
            range: 4,
            attributes: ["%poison%"]
          },
          elite: {
            health: 11,
            move: 1,
            attack: 3,
            range: 4,
            attributes: ["Attackers gain Disadvantage", "%poison%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 9,
            move: 1,
            attack: 2,
            range: 4,
            attributes: ["%poison%"]
          },
          elite: {
            health: 12,
            move: 1,
            attack: 3,
            range: 5,
            attributes: ["Attackers gain Disadvantage", "%poison%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 10,
            move: 1,
            attack: 3,
            range: 4,
            attributes: ["%poison%"]
          },
          elite: {
            health: 14,
            move: 1,
            attack: 4,
            range: 5,
            attributes: ["Attackers gain Disadvantage", "%poison%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 12,
            move: 1,
            attack: 3,
            range: 4,
            attributes: ["%poison%"]
          },
          elite: {
            health: 17,
            move: 1,
            attack: 4,
            range: 5,
            attributes: ["Attackers gain Disadvantage", "%poison%"]
          }
        }
      ]
    },
    "Cave Bear": {
      image: "Cave-Bear.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 7,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 11,
            move: 3,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 9,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 14,
            move: 3,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 11,
            move: 4,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 17,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 13,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 20,
            move: 4,
            attack: 5,
            range: 0,
            attributes: []
          }
        },
        {
          level: 4,
          normal: {
            health: 16,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 21,
            move: 5,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 17,
            move: 5,
            attack: 4,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 24,
            move: 5,
            attack: 6,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 19,
            move: 5,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 28,
            move: 5,
            attack: 7,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 22,
            move: 5,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 33,
            move: 5,
            attack: 7,
            range: 0,
            attributes: ["%wound%"]
          }
        }
      ]
    },
    "City Archer": {
      image: "City Archer.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 4,
            move: 1,
            attack: 2,
            range: 3,
            attributes: []
          },
          elite: {
            health: 6,
            move: 1,
            attack: 3,
            range: 4,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 5,
            move: 1,
            attack: 2,
            range: 4,
            attributes: []
          },
          elite: {
            health: 6,
            move: 1,
            attack: 3,
            range: 5,
            attributes: ["%pierce% 1", "%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 6,
            move: 1,
            attack: 3,
            range: 4,
            attributes: []
          },
          elite: {
            health: 7,
            move: 1,
            attack: 4,
            range: 5,
            attributes: ["%pierce% 2", "%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 6,
            move: 2,
            attack: 3,
            range: 4,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 8,
            move: 2,
            attack: 4,
            range: 5,
            attributes: ["%pierce% 2", "%shield% 2"]
          }
        },
        {
          level: 4,
          normal: {
            health: 8,
            move: 2,
            attack: 3,
            range: 5,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 10,
            move: 2,
            attack: 4,
            range: 6,
            attributes: ["%pierce% 2", "%shield% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 9,
            move: 2,
            attack: 4,
            range: 5,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 11,
            move: 2,
            attack: 5,
            range: 6,
            attributes: ["%pierce% 3", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 9,
            move: 3,
            attack: 4,
            range: 5,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 12,
            move: 3,
            attack: 6,
            range: 6,
            attributes: ["%pierce% 3", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 10,
            move: 3,
            attack: 4,
            range: 6,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 13,
            move: 3,
            attack: 6,
            range: 7,
            attributes: ["%pierce% 3", "%shield% 3"]
          }
        }
      ]
    },
    "City Guard": {
      image: "City Guard.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 6,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%shield% 1"]
          }
        },
        {
          level: 1,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 6,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%shield% 2"]
          }
        },
        {
          level: 2,
          normal: {
            health: 7,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 9,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%shield% 2"]
          }
        },
        {
          level: 3,
          normal: {
            health: 8,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 9,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 1", "%shield% 2"]
          }
        },
        {
          level: 4,
          normal: {
            health: 9,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 10,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2", "%shield% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 10,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 12,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2", "%shield% 3"]
          }
        },
        {
          level: 6,
          normal: {
            health: 11,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 13,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3", "%shield% 3"]
          }
        },
        {
          level: 7,
          normal: {
            health: 13,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 14,
            move: 3,
            attack: 6,
            range: 0,
            attributes: ["%retaliate% 3", "%shield% 3"]
          }
        }
      ]
    },
    Cultist: {
      image: "Cultist.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 4,
            move: 2,
            attack: 1,
            range: 0,
            attributes: []
          },
          elite: {
            health: 7,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 5,
            move: 2,
            attack: 1,
            range: 0,
            attributes: []
          },
          elite: {
            health: 9,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 7,
            move: 2,
            attack: 1,
            range: 0,
            attributes: []
          },
          elite: {
            health: 12,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 9,
            move: 3,
            attack: 1,
            range: 0,
            attributes: []
          },
          elite: {
            health: 13,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%curse%"]
          }
        },
        {
          level: 4,
          normal: {
            health: 10,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 15,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%curse%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 11,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%curse%"]
          },
          elite: {
            health: 18,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%curse%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 14,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%curse%"]
          },
          elite: {
            health: 22,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%curse%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 15,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%curse%"]
          },
          elite: {
            health: 25,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%curse%"]
          }
        }
      ]
    },
    "Deep Terror": {
      image: "Deep-Terror.jpg",
      hasTen: true,
      level: [
        {
          level: 0,
          normal: {
            health: 3,
            move: 0,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 5,
            move: 0,
            attack: 3,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 4,
            move: 0,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 6,
            move: 0,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 4,
            move: 0,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 7,
            move: 0,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 5,
            move: 0,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 8,
            move: 0,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 4,
          normal: {
            health: 6,
            move: 0,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 9,
            move: 0,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 7,
            move: 0,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          },
          elite: {
            health: 11,
            move: 0,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 6,
          normal: {
            health: 8,
            move: 0,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3"]
          },
          elite: {
            health: 13,
            move: 0,
            attack: 6,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 7,
          normal: {
            health: 9,
            move: 0,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          },
          elite: {
            health: 15,
            move: 0,
            attack: 6,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        }
      ]
    },
    "Earth Demon": {
      image: "Earth-Demon.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 7,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 2,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 9,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 13,
            move: 2,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 12,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 18,
            move: 2,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 13,
            move: 2,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 20,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%immobilize%"]
          }
        },
        {
          level: 4,
          normal: {
            health: 15,
            move: 2,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 21,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%immobilize%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 17,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%immobilize%"]
          },
          elite: {
            health: 25,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%immobilize%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 20,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%immobilize%"]
          },
          elite: {
            health: 27,
            move: 3,
            attack: 6,
            range: 0,
            attributes: ["%immobilize%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 22,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%immobilize%"]
          },
          elite: {
            health: 32,
            move: 3,
            attack: 6,
            range: 0,
            attributes: ["%immobilize%"]
          }
        }
      ]
    },
    "Flame Demon": {
      image: "Flame-Demon.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 2,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 3,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 3"]
          }
        },
        {
          level: 1,
          normal: {
            health: 2,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 3,
            move: 3,
            attack: 2,
            range: 4,
            attributes: ["%flying%", "%retaliate% 2: %range% 2", "%shield% 4"]
          }
        },
        {
          level: 2,
          normal: {
            health: 3,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 4,
            move: 3,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%retaliate% 3: %range% 2", "%shield% 4"]
          }
        },
        {
          level: 3,
          normal: {
            health: 3,
            move: 3,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%retaliate% 2: %range% 2", "%shield% 3"]
          },
          elite: {
            health: 5,
            move: 3,
            attack: 3,
            range: 5,
            attributes: ["%flying%", "%retaliate% 3: %range% 3", "%shield% 4"]
          }
        },
        {
          level: 4,
          normal: {
            health: 3,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%retaliate% 3: %range% 2", "%shield% 3"]
          },
          elite: {
            health: 5,
            move: 4,
            attack: 4,
            range: 5,
            attributes: ["%flying%", "%retaliate% 4: %range% 3", "%shield% 4"]
          }
        },
        {
          level: 5,
          normal: {
            health: 4,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%retaliate% 3: %range% 2", "%shield% 4"]
          },
          elite: {
            health: 6,
            move: 4,
            attack: 4,
            range: 5,
            attributes: ["%flying%", "%retaliate% 4: %range% 3", "%shield% 5"]
          }
        },
        {
          level: 6,
          normal: {
            health: 4,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%retaliate% 4: %range% 2", "%shield% 4"]
          },
          elite: {
            health: 7,
            move: 4,
            attack: 5,
            range: 5,
            attributes: ["%flying%", "%retaliate% 5: %range% 3", "%shield% 5"]
          }
        },
        {
          level: 7,
          normal: {
            health: 5,
            move: 4,
            attack: 4,
            range: 5,
            attributes: ["%flying%", "%retaliate% 4: %range% 3", "%shield% 4"]
          },
          elite: {
            health: 8,
            move: 4,
            attack: 5,
            range: 6,
            attributes: ["%flying%", "%retaliate% 5: %range% 4", "%shield% 5"]
          }
        }
      ]
    },
    "Frost Demon": {
      image: "Frost-Demon.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 6,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 10,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 2,
          normal: {
            health: 7,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 12,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 3,
          normal: {
            health: 8,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 14,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 4,
          normal: {
            health: 10,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 18,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 5,
          normal: {
            health: 11,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          },
          elite: {
            health: 20,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 6,
          normal: {
            health: 12,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3"]
          },
          elite: {
            health: 22,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        },
        {
          level: 7,
          normal: {
            health: 14,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3"]
          },
          elite: {
            health: 25,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        }
      ]
    },
    "Forest Imp": {
      image: "Forest-Sprite.jpg",
      hasTen: true,
      level: [
        {
          level: 0,
          normal: {
            health: 1,
            move: 3,
            attack: 1,
            range: 3,
            attributes: ["%flying%", "%shield% 1"]
          },
          elite: {
            health: 4,
            move: 3,
            attack: 1,
            range: 3,
            attributes: ["%flying%", "%shield% 1"]
          }
        },
        {
          level: 1,
          normal: {
            health: 2,
            move: 3,
            attack: 1,
            range: 3,
            attributes: ["%flying%", "%shield% 1"]
          },
          elite: {
            health: 5,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 2,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 1"]
          },
          elite: {
            health: 6,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%curse%", "%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 3,
            move: 4,
            attack: 2,
            range: 4,
            attributes: ["%flying%", "%shield% 1"]
          },
          elite: {
            health: 7,
            move: 4,
            attack: 2,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 1"]
          }
        },
        {
          level: 4,
          normal: {
            health: 3,
            move: 4,
            attack: 2,
            range: 4,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 7,
            move: 4,
            attack: 2,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 4,
            move: 4,
            attack: 2,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 2"]
          },
          elite: {
            health: 8,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 4,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 2"]
          },
          elite: {
            health: 9,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 6,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 2"]
          },
          elite: {
            health: 11,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%curse%", "%shield% 2"]
          }
        }
      ]
    },
    "Giant Viper": {
      image: "Giant-Viper.jpg",
      hasTen: true,
      level: [
        {
          level: 0,
          normal: {
            health: 2,
            move: 2,
            attack: 1,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 3,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 1,
          normal: {
            health: 3,
            move: 2,
            attack: 1,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 5,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 2,
          normal: {
            health: 4,
            move: 3,
            attack: 1,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 7,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 3,
          normal: {
            health: 4,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 8,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 4,
          normal: {
            health: 6,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 11,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 7,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 13,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 8,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 14,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 10,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 17,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%poison%"]
          }
        }
      ]
    },
    "Harrower Infester": {
      image: "Harrower-Infester.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 6,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 12,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 7,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 12,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 2,
          normal: {
            health: 8,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 14,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 3,
          normal: {
            health: 10,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 17,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 4,
          normal: {
            health: 12,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 19,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 5,
          normal: {
            health: 12,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          },
          elite: {
            health: 21,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 6,
          normal: {
            health: 15,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          },
          elite: {
            health: 22,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        },
        {
          level: 7,
          normal: {
            health: 17,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 4"]
          },
          elite: {
            health: 26,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        }
      ]
    },
    Hound: {
      image: "Hound.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 4,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 6,
            move: 5,
            attack: 2,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 4,
            move: 4,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 6,
            move: 5,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 2,
          normal: {
            health: 6,
            move: 4,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 7,
            move: 5,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 3,
          normal: {
            health: 8,
            move: 4,
            attack: 2,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 8,
            move: 5,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 4,
          normal: {
            health: 8,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 11,
            move: 5,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 9,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 12,
            move: 5,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 6,
          normal: {
            health: 11,
            move: 5,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 15,
            move: 6,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 7,
          normal: {
            health: 15,
            move: 5,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 15,
            move: 6,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        }
      ]
    },
    "Inox Archer": {
      image: "Inox Archer.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 2,
            attributes: []
          },
          elite: {
            health: 7,
            move: 2,
            attack: 3,
            range: 3,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 6,
            move: 2,
            attack: 2,
            range: 3,
            attributes: []
          },
          elite: {
            health: 8,
            move: 2,
            attack: 3,
            range: 4,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 8,
            move: 2,
            attack: 2,
            range: 3,
            attributes: []
          },
          elite: {
            health: 11,
            move: 2,
            attack: 3,
            range: 4,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 9,
            move: 2,
            attack: 3,
            range: 3,
            attributes: []
          },
          elite: {
            health: 13,
            move: 2,
            attack: 4,
            range: 4,
            attributes: []
          }
        },
        {
          level: 4,
          normal: {
            health: 10,
            move: 3,
            attack: 3,
            range: 3,
            attributes: []
          },
          elite: {
            health: 14,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%wound%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 12,
            move: 3,
            attack: 3,
            range: 4,
            attributes: []
          },
          elite: {
            health: 17,
            move: 3,
            attack: 4,
            range: 5,
            attributes: ["%wound%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 12,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%wound%"]
          },
          elite: {
            health: 19,
            move: 3,
            attack: 5,
            range: 5,
            attributes: ["%wound%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 15,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%wound%"]
          },
          elite: {
            health: 23,
            move: 3,
            attack: 5,
            range: 5,
            attributes: ["%wound%"]
          }
        }
      ]
    },
    "Inox Guard": {
      image: "Inox Guard.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 9,
            move: 1,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 1"]
          }
        },
        {
          level: 1,
          normal: {
            health: 8,
            move: 2,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 2,
          normal: {
            health: 9,
            move: 2,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 12,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          }
        },
        {
          level: 3,
          normal: {
            health: 11,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 15,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 4,
          normal: {
            health: 12,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 17,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 3"]
          }
        },
        {
          level: 5,
          normal: {
            health: 13,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 19,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        },
        {
          level: 6,
          normal: {
            health: 16,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 1"]
          },
          elite: {
            health: 21,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        },
        {
          level: 7,
          normal: {
            health: 19,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%retaliate% 2"]
          },
          elite: {
            health: 23,
            move: 3,
            attack: 6,
            range: 0,
            attributes: ["%retaliate% 4"]
          }
        }
      ]
    },
    "Inox Shaman": {
      image: "Inox-Shaman.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 4,
            move: 1,
            attack: 2,
            range: 3,
            attributes: []
          },
          elite: {
            health: 6,
            move: 2,
            attack: 3,
            range: 3,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 6,
            move: 1,
            attack: 2,
            range: 3,
            attributes: []
          },
          elite: {
            health: 9,
            move: 2,
            attack: 3,
            range: 3,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 7,
            move: 2,
            attack: 2,
            range: 3,
            attributes: []
          },
          elite: {
            health: 11,
            move: 3,
            attack: 3,
            range: 3,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 9,
            move: 2,
            attack: 2,
            range: 4,
            attributes: []
          },
          elite: {
            health: 14,
            move: 3,
            attack: 3,
            range: 4,
            attributes: []
          }
        },
        {
          level: 4,
          normal: {
            health: 10,
            move: 2,
            attack: 3,
            range: 4,
            attributes: []
          },
          elite: {
            health: 16,
            move: 3,
            attack: 4,
            range: 4,
            attributes: []
          }
        },
        {
          level: 5,
          normal: {
            health: 13,
            move: 2,
            attack: 3,
            range: 4,
            attributes: []
          },
          elite: {
            health: 20,
            move: 3,
            attack: 4,
            range: 4,
            attributes: []
          }
        },
        {
          level: 6,
          normal: {
            health: 15,
            move: 3,
            attack: 3,
            range: 4,
            attributes: []
          },
          elite: {
            health: 24,
            move: 4,
            attack: 4,
            range: 4,
            attributes: []
          }
        },
        {
          level: 7,
          normal: {
            health: 16,
            move: 3,
            attack: 4,
            range: 4,
            attributes: []
          },
          elite: {
            health: 27,
            move: 4,
            attack: 5,
            range: 4,
            attributes: []
          }
        }
      ]
    },
    "Living Bones": {
      image: "Skeleton.jpg",
      hasTen: true,
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 1,
            range: 0,
            attributes: ["%target% 2"]
          },
          elite: {
            health: 6,
            move: 4,
            attack: 2,
            range: 0,
            attributes: ["%target% 2"]
          }
        },
        {
          level: 1,
          normal: {
            health: 5,
            move: 3,
            attack: 1,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          },
          elite: {
            health: 6,
            move: 4,
            attack: 2,
            range: 0,
            attributes: ["%target% 3", "%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 5,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          },
          elite: {
            health: 7,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%target% 3", "%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 7,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          },
          elite: {
            health: 10,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%target% 3", "%shield% 1"]
          }
        },
        {
          level: 4,
          normal: {
            health: 7,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          },
          elite: {
            health: 11,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%target% 3", "%shield% 1"]
          }
        },
        {
          level: 5,
          normal: {
            health: 9,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          },
          elite: {
            health: 11,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%target% 3", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 10,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          },
          elite: {
            health: 11,
            move: 6,
            attack: 4,
            range: 0,
            attributes: ["%target% 3", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 13,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          },
          elite: {
            health: 14,
            move: 6,
            attack: 4,
            range: 0,
            attributes: ["%target% 3", "%shield% 2"]
          }
        }
      ]
    },
    "Living Corpse": {
      image: "Zombie.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 7,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 1,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 9,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 13,
            move: 1,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 10,
            move: 1,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 13,
            move: 2,
            attack: 5,
            range: 0,
            attributes: []
          }
        },
        {
          level: 4,
          normal: {
            health: 11,
            move: 2,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 15,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 13,
            move: 2,
            attack: 4,
            range: 0,
            attributes: []
          },
          elite: {
            health: 17,
            move: 2,
            attack: 6,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 14,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 21,
            move: 2,
            attack: 6,
            range: 0,
            attributes: ["%poison%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 15,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 25,
            move: 2,
            attack: 6,
            range: 0,
            attributes: ["%poison%"]
          }
        }
      ]
    },
    "Living Spirit": {
      image: ".jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 2,
            move: 2,
            attack: 2,
            range: 2,
            attributes: ["%flying%", "%shield% 1"]
          },
          elite: {
            health: 3,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          }
        },
        {
          level: 1,
          normal: {
            health: 2,
            move: 2,
            attack: 2,
            range: 2,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 3,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%shield% 3"]
          }
        },
        {
          level: 2,
          normal: {
            health: 2,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 3,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%shield% 3"]
          }
        },
        {
          level: 3,
          normal: {
            health: 3,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 4,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%shield% 3"]
          }
        },
        {
          level: 4,
          normal: {
            health: 3,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 4,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%shield% 4"]
          }
        },
        {
          level: 5,
          normal: {
            health: 4,
            move: 3,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 6,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%shield% 4"]
          }
        },
        {
          level: 6,
          normal: {
            health: 4,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 7,
            move: 4,
            attack: 5,
            range: 5,
            attributes: ["%flying%", "%shield% 4"]
          }
        },
        {
          level: 7,
          normal: {
            health: 6,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 9,
            move: 4,
            attack: 5,
            range: 5,
            attributes: ["%flying%", "%shield% 4"]
          }
        }
      ]
    },
    Lurker: {
      image: "Lurker.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%target% 2"]
          },
          elite: {
            health: 7,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%shield% 1"]
          }
        },
        {
          level: 1,
          normal: {
            health: 7,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%target% 2", "%pierce% 1"]
          },
          elite: {
            health: 9,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%pierce% 1", "%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 9,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%target% 2", "%pierce% 1"]
          },
          elite: {
            health: 12,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%pierce% 2", "%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 10,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%pierce% 2"]
          },
          elite: {
            health: 14,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%target% 2", "%pierce% 2", "%shield% 1"]
          }
        },
        {
          level: 4,
          normal: {
            health: 10,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%target% 2", "%pierce% 2", "%shield% 1"]
          },
          elite: {
            health: 14,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%target% 2", "%pierce% 3", "%shield% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 11,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%target% 2", "%pierce% 2", "%shield% 1"]
          },
          elite: {
            health: 15,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%target% 2", "%pierce% 3", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 12,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%target% 2", "%pierce% 3", "%shield% 1"]
          },
          elite: {
            health: 16,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%target% 2", "%pierce% 4", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 14,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%target% 2", "%pierce% 3", "%shield% 1"]
          },
          elite: {
            health: 18,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%target% 2", "%pierce% 4", "%shield% 2"]
          }
        }
      ]
    },
    Ooze: {
      image: "Ooze.jpg",
      hasTen: true,
      level: [
        {
          level: 0,
          normal: {
            health: 4,
            move: 1,
            attack: 2,
            range: 2,
            attributes: []
          },
          elite: {
            health: 8,
            move: 1,
            attack: 2,
            range: 3,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 5,
            move: 1,
            attack: 2,
            range: 2,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 9,
            move: 1,
            attack: 2,
            range: 3,
            attributes: ["%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 7,
            move: 1,
            attack: 2,
            range: 3,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 11,
            move: 1,
            attack: 3,
            range: 3,
            attributes: ["%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 8,
            move: 1,
            attack: 3,
            range: 3,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 11,
            move: 2,
            attack: 3,
            range: 4,
            attributes: ["%poison%", "%shield% 1"]
          }
        },
        {
          level: 4,
          normal: {
            health: 9,
            move: 2,
            attack: 3,
            range: 3,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 13,
            move: 2,
            attack: 4,
            range: 4,
            attributes: ["%poison%", "%shield% 1"]
          }
        },
        {
          level: 5,
          normal: {
            health: 10,
            move: 2,
            attack: 3,
            range: 3,
            attributes: ["%poison%", "%shield% 1"]
          },
          elite: {
            health: 15,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%poison%", "%shield% 1"]
          }
        },
        {
          level: 6,
          normal: {
            health: 12,
            move: 2,
            attack: 4,
            range: 3,
            attributes: ["%poison%", "%shield% 1"]
          },
          elite: {
            health: 16,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%poison%", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 14,
            move: 2,
            attack: 4,
            range: 3,
            attributes: ["%poison%", "%shield% 1"]
          },
          elite: {
            health: 18,
            move: 3,
            attack: 5,
            range: 4,
            attributes: ["%poison%", "%shield% 2"]
          }
        }
      ]
    },
    "Night Demon": {
      image: "Night-Demon.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 3,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 5,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        },
        {
          level: 1,
          normal: {
            health: 5,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 8,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        },
        {
          level: 2,
          normal: {
            health: 6,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 11,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        },
        {
          level: 3,
          normal: {
            health: 7,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 13,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        },
        {
          level: 4,
          normal: {
            health: 8,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 15,
            move: 5,
            attack: 5,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        },
        {
          level: 5,
          normal: {
            health: 11,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 17,
            move: 5,
            attack: 6,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        },
        {
          level: 6,
          normal: {
            health: 14,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 21,
            move: 5,
            attack: 6,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        },
        {
          level: 7,
          normal: {
            health: 15,
            move: 4,
            attack: 6,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          },
          elite: {
            health: 21,
            move: 5,
            attack: 8,
            range: 0,
            attributes: ["Attackers gain Disadvantage"]
          }
        }
      ]
    },
    "Rending Drake": {
      image: "Vicious-Drake.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 7,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 6,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 7,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 2,
          normal: {
            health: 7,
            move: 4,
            attack: 3,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 9,
            move: 5,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 3,
          normal: {
            health: 7,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 10,
            move: 5,
            attack: 6,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 4,
          normal: {
            health: 9,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 11,
            move: 6,
            attack: 6,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 10,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 14,
            move: 6,
            attack: 6,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 11,
            move: 5,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 15,
            move: 6,
            attack: 7,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 14,
            move: 5,
            attack: 5,
            range: 0,
            attributes: ["%wound%"]
          },
          elite: {
            health: 18,
            move: 6,
            attack: 7,
            range: 0,
            attributes: ["%wound%"]
          }
        }
      ]
    },
    "Savvas Icestorm": {
      image: "Savvas-Icestorm.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 7,
            move: 2,
            attack: 2,
            range: 3,
            attributes: ["%pierce% 3"]
          },
          elite: {
            health: 12,
            move: 2,
            attack: 3,
            range: 4,
            attributes: ["%pierce% 3"]
          }
        },
        {
          level: 1,
          normal: {
            health: 10,
            move: 2,
            attack: 2,
            range: 4,
            attributes: ["%pierce% 3"]
          },
          elite: {
            health: 12,
            move: 2,
            attack: 3,
            range: 5,
            attributes: ["%pierce% 3", "%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 12,
            move: 3,
            attack: 2,
            range: 4,
            attributes: ["%pierce% 3"]
          },
          elite: {
            health: 15,
            move: 3,
            attack: 3,
            range: 5,
            attributes: ["%pierce% 3", "%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 12,
            move: 3,
            attack: 3,
            range: 4,
            attributes: ["%pierce% 3", "%shield% 1"]
          },
          elite: {
            health: 18,
            move: 3,
            attack: 4,
            range: 6,
            attributes: ["%pierce% 3", "%shield% 1"]
          }
        },
        {
          level: 4,
          normal: {
            health: 14,
            move: 3,
            attack: 3,
            range: 5,
            attributes: ["%pierce% 3", "%shield% 1"]
          },
          elite: {
            health: 19,
            move: 4,
            attack: 4,
            range: 6,
            attributes: ["%pierce% 3", "%shield% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 16,
            move: 3,
            attack: 4,
            range: 5,
            attributes: ["%pierce% 3", "%shield% 1"]
          },
          elite: {
            health: 21,
            move: 4,
            attack: 5,
            range: 6,
            attributes: ["%pierce% 3", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 16,
            move: 3,
            attack: 4,
            range: 5,
            attributes: ["%pierce% 3", "%shield% 2"]
          },
          elite: {
            health: 23,
            move: 4,
            attack: 6,
            range: 6,
            attributes: ["%pierce% 3", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 17,
            move: 4,
            attack: 4,
            range: 6,
            attributes: ["%pierce% 3", "%shield% 2"]
          },
          elite: {
            health: 24,
            move: 4,
            attack: 6,
            range: 6,
            attributes: ["%pierce% 4", "%shield% 3"]
          }
        }
      ]
    },
    "Savvas Lavaflow": {
      image: "Savvas-Lavaflow.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 8,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 13,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 9,
            move: 3,
            attack: 2,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 15,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%wound%"]
          }
        },
        {
          level: 2,
          normal: {
            health: 11,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 18,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          }
        },
        {
          level: 3,
          normal: {
            health: 14,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 21,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          }
        },
        {
          level: 4,
          normal: {
            health: 16,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%poison%"]
          },
          elite: {
            health: 24,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 18,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          },
          elite: {
            health: 27,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 20,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          },
          elite: {
            health: 30,
            move: 4,
            attack: 6,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 24,
            move: 4,
            attack: 4,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          },
          elite: {
            health: 35,
            move: 4,
            attack: 6,
            range: 0,
            attributes: ["%poison%", "%wound%"]
          }
        }
      ]
    },
    "Spitting Drake": {
      image: "Spitting-Drake.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%"]
          },
          elite: {
            health: 8,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%flying%"]
          }
        },
        {
          level: 1,
          normal: {
            health: 6,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%"]
          },
          elite: {
            health: 9,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%muddle%"]
          }
        },
        {
          level: 2,
          normal: {
            health: 8,
            move: 3,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%muddle%"]
          },
          elite: {
            health: 10,
            move: 3,
            attack: 5,
            range: 4,
            attributes: ["%flying%", "%muddle%"]
          }
        },
        {
          level: 3,
          normal: {
            health: 8,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%muddle%"]
          },
          elite: {
            health: 12,
            move: 3,
            attack: 5,
            range: 5,
            attributes: ["%flying%", "%muddle%"]
          }
        },
        {
          level: 4,
          normal: {
            health: 9,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%muddle%"]
          },
          elite: {
            health: 14,
            move: 4,
            attack: 5,
            range: 5,
            attributes: ["%flying%", "%muddle%"]
          }
        },
        {
          level: 5,
          normal: {
            health: 12,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%muddle%"]
          },
          elite: {
            health: 16,
            move: 4,
            attack: 6,
            range: 5,
            attributes: ["%flying%", "%muddle%"]
          }
        },
        {
          level: 6,
          normal: {
            health: 13,
            move: 4,
            attack: 5,
            range: 4,
            attributes: ["%flying%", "%muddle%"]
          },
          elite: {
            health: 19,
            move: 4,
            attack: 6,
            range: 5,
            attributes: ["%flying%", "%muddle%"]
          }
        },
        {
          level: 7,
          normal: {
            health: 16,
            move: 4,
            attack: 5,
            range: 4,
            attributes: ["%flying%", "%muddle%"]
          },
          elite: {
            health: 21,
            move: 4,
            attack: 7,
            range: 5,
            attributes: ["%flying%", "%muddle%"]
          }
        }
      ]
    },
    "Stone Golem": {
      image: "Stone-Golem.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 10,
            move: 1,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 10,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%shield% 1"]
          }
        },
        {
          level: 1,
          normal: {
            health: 10,
            move: 1,
            attack: 3,
            range: 0,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 11,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%shield% 2"]
          }
        },
        {
          level: 2,
          normal: {
            health: 11,
            move: 1,
            attack: 4,
            range: 0,
            attributes: ["%shield% 1"]
          },
          elite: {
            health: 14,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%shield% 2"]
          }
        },
        {
          level: 3,
          normal: {
            health: 11,
            move: 1,
            attack: 4,
            range: 0,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 15,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%shield% 3"]
          }
        },
        {
          level: 4,
          normal: {
            health: 12,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 17,
            move: 2,
            attack: 6,
            range: 0,
            attributes: ["%shield% 3"]
          }
        },
        {
          level: 5,
          normal: {
            health: 13,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 19,
            move: 3,
            attack: 6,
            range: 0,
            attributes: ["%shield% 3"]
          }
        },
        {
          level: 6,
          normal: {
            health: 16,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 20,
            move: 3,
            attack: 7,
            range: 0,
            attributes: ["%shield% 3"]
          }
        },
        {
          level: 7,
          normal: {
            health: 16,
            move: 2,
            attack: 5,
            range: 0,
            attributes: ["%shield% 3"]
          },
          elite: {
            health: 21,
            move: 3,
            attack: 7,
            range: 0,
            attributes: ["%shield% 4"]
          }
        }
      ]
    },
    "Sun Demon": {
      image: "Sun-Demon.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 5,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          },
          elite: {
            health: 9,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          }
        },
        {
          level: 1,
          normal: {
            health: 7,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          },
          elite: {
            health: 12,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          }
        },
        {
          level: 2,
          normal: {
            health: 9,
            move: 2,
            attack: 2,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          },
          elite: {
            health: 13,
            move: 2,
            attack: 4,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          }
        },
        {
          level: 3,
          normal: {
            health: 10,
            move: 2,
            attack: 3,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          },
          elite: {
            health: 15,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          }
        },
        {
          level: 4,
          normal: {
            health: 11,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          },
          elite: {
            health: 16,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 1"]
          }
        },
        {
          level: 5,
          normal: {
            health: 11,
            move: 3,
            attack: 3,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 2"]
          },
          elite: {
            health: 16,
            move: 3,
            attack: 5,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 12,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 2"]
          },
          elite: {
            health: 18,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 2"]
          }
        },
        {
          level: 7,
          normal: {
            health: 15,
            move: 3,
            attack: 4,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 2"]
          },
          elite: {
            health: 22,
            move: 4,
            attack: 5,
            range: 0,
            attributes: ["%flying%", "Advantage", "%shield% 2"]
          }
        }
      ]
    },
    "Vermling Scout": {
      image: "Vermling-Scout.jpg",
      hasTen: true,
      level: [
        {
          level: 0,
          normal: {
            health: 2,
            move: 3,
            attack: 1,
            range: 0,
            attributes: []
          },
          elite: {
            health: 4,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          }
        },
        {
          level: 1,
          normal: {
            health: 3,
            move: 3,
            attack: 1,
            range: 0,
            attributes: []
          },
          elite: {
            health: 5,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          }
        },
        {
          level: 2,
          normal: {
            health: 3,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 5,
            move: 4,
            attack: 3,
            range: 0,
            attributes: []
          }
        },
        {
          level: 3,
          normal: {
            health: 5,
            move: 3,
            attack: 2,
            range: 0,
            attributes: []
          },
          elite: {
            health: 7,
            move: 4,
            attack: 3,
            range: 0,
            attributes: []
          }
        },
        {
          level: 4,
          normal: {
            health: 6,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 8,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 5,
          normal: {
            health: 8,
            move: 3,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 11,
            move: 4,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 6,
          normal: {
            health: 9,
            move: 4,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 12,
            move: 5,
            attack: 4,
            range: 0,
            attributes: []
          }
        },
        {
          level: 7,
          normal: {
            health: 11,
            move: 4,
            attack: 3,
            range: 0,
            attributes: []
          },
          elite: {
            health: 15,
            move: 5,
            attack: 4,
            range: 0,
            attributes: []
          }
        }
      ]
    },
    "Vermling Shaman": {
      image: "Vermling-Shaman.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 2,
            move: 2,
            attack: 1,
            range: 3,
            attributes: ["%shield% 2"]
          },
          elite: {
            health: 3,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%shield% 2"]
          }
        },
        {
          level: 1,
          normal: {
            health: 2,
            move: 2,
            attack: 1,
            range: 3,
            attributes: ["%shield% 3"]
          },
          elite: {
            health: 3,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%shield% 3"]
          }
        },
        {
          level: 2,
          normal: {
            health: 3,
            move: 2,
            attack: 1,
            range: 4,
            attributes: ["%shield% 3"]
          },
          elite: {
            health: 4,
            move: 3,
            attack: 2,
            range: 4,
            attributes: ["%shield% 3"]
          }
        },
        {
          level: 3,
          normal: {
            health: 3,
            move: 2,
            attack: 2,
            range: 4,
            attributes: ["%shield% 3"]
          },
          elite: {
            health: 5,
            move: 3,
            attack: 3,
            range: 4,
            attributes: ["%shield% 3"]
          }
        },
        {
          level: 4,
          normal: {
            health: 3,
            move: 3,
            attack: 2,
            range: 4,
            attributes: ["%muddle%", "%shield% 3"]
          },
          elite: {
            health: 5,
            move: 3,
            attack: 3,
            range: 4,
            attributes: ["%muddle%", "%shield% 4"]
          }
        },
        {
          level: 5,
          normal: {
            health: 4,
            move: 3,
            attack: 3,
            range: 4,
            attributes: ["%muddle%", "%shield% 3"]
          },
          elite: {
            health: 6,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%muddle%", "%shield% 4"]
          }
        },
        {
          level: 6,
          normal: {
            health: 5,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%muddle%", "%shield% 3"]
          },
          elite: {
            health: 6,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%muddle%", "%shield% 5"]
          }
        },
        {
          level: 7,
          normal: {
            health: 7,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%muddle%", "%shield% 3"]
          },
          elite: {
            health: 8,
            move: 3,
            attack: 4,
            range: 4,
            attributes: ["%muddle%", "%shield% 5"]
          }
        }
      ]
    },
    "Wind Demon": {
      image: "Wind-Demon.jpg",
      level: [
        {
          level: 0,
          normal: {
            health: 3,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 1"]
          },
          elite: {
            health: 5,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%shield% 1"]
          }
        },
        {
          level: 1,
          normal: {
            health: 3,
            move: 3,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 5,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%shield% 2"]
          }
        },
        {
          level: 2,
          normal: {
            health: 4,
            move: 4,
            attack: 2,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 7,
            move: 5,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%shield% 2"]
          }
        },
        {
          level: 3,
          normal: {
            health: 5,
            move: 4,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 8,
            move: 5,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%shield% 2"]
          }
        },
        {
          level: 4,
          normal: {
            health: 7,
            move: 4,
            attack: 3,
            range: 3,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 8,
            move: 5,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%disarm%", "%shield% 2"]
          }
        },
        {
          level: 5,
          normal: {
            health: 9,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%shield% 2"]
          },
          elite: {
            health: 11,
            move: 5,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%disarm%", "%shield% 2"]
          }
        },
        {
          level: 6,
          normal: {
            health: 10,
            move: 4,
            attack: 3,
            range: 4,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 12,
            move: 5,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%disarm%", "%shield% 3"]
          }
        },
        {
          level: 7,
          normal: {
            health: 11,
            move: 4,
            attack: 4,
            range: 4,
            attributes: ["%flying%", "%shield% 3"]
          },
          elite: {
            health: 13,
            move: 5,
            attack: 5,
            range: 4,
            attributes: ["%flying%", "%disarm%", "%shield% 3"]
          }
        }
      ]
    }
  }
};