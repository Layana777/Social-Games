// export const findPlayer

export const deletePlayer = (players, idx) => {
  return players.filter((_, i) => idx !== i);
};

export const randomTopic = (words) => {
  return words[Math.floor(Math.random() * words.length)];
};

export const randomPlayer = (players) => {
  return Math.floor(Math.random() * players.length);
};


