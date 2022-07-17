import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcon } from "./styles/StyledSocialIcon.styled";

export default function SocialIcon() {
  return (
    <StyledSocialIcon>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcon>
  );
}
