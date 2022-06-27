import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from '../../interfaces/pokemon-list';



export const PokemonCard: FC<SmallPokemon> = ({ id, name, img, url }) => {

    const router =  useRouter()

    const mouseEventHandler = () => {        
        router.push(`/pokemon/${id}`)
    }

    return (
        <Card css={{ w: "100%", h: "330px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text h3 color="white" transform="capitalize" size={27}>
                        {name}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 30, top: 15 }}>
                <Card.Image
                    src={img}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    alt={`Imagen de ${name}`}
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#ffffffAA" weight="bold" size={22}>
                            # {id}
                        </Text>

                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button 
                                flat 
                                auto 
                                rounded 
                                css={{ backgroundColor: '#FECA1B' }}
                                onPress={mouseEventHandler} >
                                <Text
                                    css={{ color: "#000399" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Ver
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
} 