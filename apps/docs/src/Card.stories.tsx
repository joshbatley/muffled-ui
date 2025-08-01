import { StoryObj } from '@storybook/react';
import { ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Title, Text, Box } from '@muffled-ui/react';
import {
  Label,
  OutlineButton,
  PrimaryButton,
  TextArea,
  Input,
  Card,
  CardContent,
  CardMedia,
} from '@muffled-ui/react';

export default {
  title: 'Data/Card',
  component: Card,
};

export const Showcase: StoryObj<typeof Card> = {
  render: () => (
    <Box display="flex" justifyContent="space-between">
      <Card
        mb="2"
        maxWidth={400}
        display="flex"
        flexDirection="row"
      >
        <CardMedia
          as="img"
          alt="green iguana"
          w="33.333%"
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent py="4">
          <Box display="flex" justifyContent="space-between">
            <Title as="h3" fontWeight="700">
              The Reptile
            </Title>
            <Text mono as="span" color="baseHighlight">
              £99.99
            </Text>
          </Box>
          <Box mb="2">
            <Text fontSize="0" lineHeight="0" color="baseHighlight">
              In stock
            </Text>
          </Box>
          <Text>Good with children, only lightly bites limbs off.</Text>
          <Box as="hr" my="4" />
          <Box w="100%" display="flex">
            <PrimaryButton
              justifyContent="center"
              flexGrow="1"
              mr="2"
            >
              <ShoppingBagIcon width={16} height={16} />
              <Text>Buy now</Text>
            </PrimaryButton>
            <OutlineButton
              justifyContent="center"
              flexGrow="1"
              textAlign="center"
            >
              <ShoppingCartIcon width={16} height={16} />
              <Text>Add to cart</Text>
            </OutlineButton>
          </Box>
        </CardContent>
      </Card>

      <Card w={500}>
        <CardContent borderBottom="border.1">
          <Title as="h4">Application form</Title>
        </CardContent>

        <CardContent my="2">
          <Label value="Website url">
            <Input
              before={
                <Box px="2" py="1">
                  https://
                </Box>
              }
              placeholder="www.example.com"
            />
          </Label>

          <Label value="Desciption">
            <TextArea placeholder="desciption of website" />
          </Label>
        </CardContent>

        <Box bg="background" p="2" display="flex" justifyContent="flex-end">
          <PrimaryButton>Submit</PrimaryButton>
        </Box>
      </Card>
    </Box>
  ),
};

export const Content: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <CardContent>
        A basic styled div for use inside Card component
      </CardContent>
    </Card>
  ),
};

export const Media: StoryObj<typeof Card> = {
  render: () => (
    <Box display="flex" justifyContent="space-evenly">
      <Card maxWidth={300} h="fit-content">
        <CardMedia
          as="img"
          alt="green iguana"
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>A image</CardContent>
      </Card>
      <Card maxWidth={300}>
        <CardMedia
          as="iframe"
          alt="green iguana"
          src="https://www.youtube.com/embed/es64KSWcboA"
        />
        <CardContent>A video</CardContent>
      </Card>
    </Box>
  ),
};
