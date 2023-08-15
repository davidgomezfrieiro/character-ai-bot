import CharacterAI from 'node_characterai';
const characterAI = new CharacterAI();

const helloMsg = async () => {
  await characterAI.authenticateAsGuest();

  const characterId = 'noH09w6fPdQ-WdBVrBhhQM55f8OnrsnBtD_Xr20Z5Ok'; // Discord moderator

  const chat = await characterAI.createOrContinueChat(characterId);
  const response = await chat.sendAndAwaitResponse('Hello', true);

  return response.text;
  // use response.text to use it in a string.
};

export { helloMsg };
