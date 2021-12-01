import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Button } from "../../globalStyles";
import {
  Form,
  FormInput,
  FooterContainer,
  FooterLink,
  FooterLinkArrow,
  FooterLinkTitle,
  FooterLinkTitleWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkItemsWrap,
  FooterLinksWrapper,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./Footer.elements";

const Footer = () => {
  const [click, setClick] = useState([...Array(4).fill(true)]);
  const handleClick = (index) => {
    setClick((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive membership to receive the latest news and trends!
          </FooterSubHeading>
          <FooterSubText>You can unsubscribe at any time.</FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="Your Email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitleWrap onClick={() => handleClick(0)}>
                <FooterLinkTitle> About Us </FooterLinkTitle>
                <FooterLinkArrow>
                  {click[0] ? (
                    <MdOutlineKeyboardArrowDown size={24}/>
                  ) : (
                    <MdOutlineKeyboardArrowUp size={24}/>
                  )}
                </FooterLinkArrow>
              </FooterLinkTitleWrap>
              <FooterLinkItemsWrap click={click[0]}>
                <FooterLink to="/sign-up">How it works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Term of Services</FooterLink>
              </FooterLinkItemsWrap>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitleWrap onClick={() => handleClick(1)}>
                <FooterLinkTitle> Contact Us </FooterLinkTitle>
                <FooterLinkArrow>
                  {click[1] ? (
                    <MdOutlineKeyboardArrowDown size={24}/>
                  ) : (
                    <MdOutlineKeyboardArrowUp size={24}/>
                  )}
                </FooterLinkArrow>
              </FooterLinkTitleWrap>
              <FooterLinkItemsWrap click={click[1]}>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
              </FooterLinkItemsWrap>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitleWrap onClick={() => handleClick(2)}>
                <FooterLinkTitle> Videos </FooterLinkTitle>
                <FooterLinkArrow>
                  {click[2] ? (
                    <MdOutlineKeyboardArrowDown size={24}/>
                  ) : (
                    <MdOutlineKeyboardArrowUp size={24}/>
                  )}
                </FooterLinkArrow>
              </FooterLinkTitleWrap>
              <FooterLinkItemsWrap click={click[2]}>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItemsWrap>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitleWrap onClick={() => handleClick(3)}>
                <FooterLinkTitle> Social Media </FooterLinkTitle>
                <FooterLinkArrow>
                  {click[3] ? (
                    <MdOutlineKeyboardArrowDown size={24}/>
                  ) : (
                    <MdOutlineKeyboardArrowUp size={24}/>
                  )}
                </FooterLinkArrow>
              </FooterLinkTitleWrap>
              <FooterLinkItemsWrap click={click[3]}>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Pintarest</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItemsWrap>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              Kaahin Dynamics
            </SocialLogo>
            <WebsiteRights>Kaahin Dynamics &copy; 2021 </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Pintarest">
                <FaPinterest />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
