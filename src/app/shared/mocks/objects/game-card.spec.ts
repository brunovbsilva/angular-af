import { GameCard } from "../../../pages/games/game-card/models/game-card"
import { AcceptButton, JoinButton, RejectButton } from "../../../pages/games/game-card/models/game-card-button"

const gameCard = {
  imageUrl: 'https://www.airfinder.com/game-image.jpg',
  name: 'Game Name',
  location: 'Game Location',
  dateFrom: 1620000000000,
  dateTo: 1620000000000,
  buttons: [
    new AcceptButton('Accept'),
    new RejectButton('Reject'),
    new JoinButton('Join')
  ]
}

export const gameCardMock = new GameCard(gameCard);