import { Flex } from "./styles/Flex.styled";
import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/StyledFooter.styled";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt=""></img>
      </Container>

      <Flex>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>+1-123-456-7890</li>
          <li>test@gmail.com</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <SocialIcon />
      </Flex>
      <p>&copy; 2022 Hari. All rights reserved</p>
    </StyledFooter>
  );
}
