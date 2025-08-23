import { Game } from "../hooks/useGames";
import { Card, CardBody, chakra, Heading, Image, Text } from "@chakra-ui/react";
import PlatformList from "./PlatformList";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      {" "}
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
