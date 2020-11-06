import React, { Fragment } from "react";
import Styled from "styled-components";
import Image1 from "./../images/image1.jpg";
import Image3 from "./../images/image3.jpg"; 
import Image4 from "./../images/image4.jpg"; 
import Image5 from "./../images/image5.jpg"; 
import Image6 from "./../images/image6.jpg"; 
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Footer from "./../footer/footer";

const Nav = Styled.div`
  background-color: #ffffff;
  font-family: "Mulish", sans-serif;
`;

const Subnav = Styled.div`
  display: flex;
`;

const SubLeft = Styled.div` 
  display: block;
  margin-left: 1rem;
  width: 65%;
`;

const SubRight = Styled.div`
  display: block;
  margin: 0 5rem 0 2.5rem;
  width:45%;
`;

const SubnavRight = Styled.div`
  margin: 0 0 2rem 0;
`;

const Title = Styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  text-align: center;
`;

const Picture = Styled.img`
  height: 491px;
  width: 735px;
  object-fit: cover;
`;

const Navnewsletter = Styled.div`
  background-color: #E0E0E0;
  padding: 1rem;
`;

const NavTopics = Styled.div`
  background-color: #E0E0E0;
  padding: 1rem;
`;

const NavSocial = Styled.div`
  background-color: #424851;
  color: #ffffff;
  padding: 1rem;
`;

const Subtitle = Styled.h2`
  font-size: 1rem;
  margin: 0 1rem 1rem 0;
`;

const Link = Styled.p`
`;

const LinkSocial = Styled.p`
color: #ffffff;
`;

const Form = Styled.form`
  display: block;
`;

const NavForm = Styled.div`
  display: block;
`;

const Anchor = Styled.a`

`;

const AnchorM = Styled.a`
  background: #f13b3b;
  box-sizing: border-box;
  box-shadow: 0 10px 15px 0 rgba(241, 59, 59, 0.2);
  color: #ffffff;
  display: inline-block;
  font-size: 1rem;
  font-weight: 800;
  float: none;
  position: static;
  text-decoration: none;
  padding: 5px 20px 5px 20px;
`;

const Input = Styled.input`
  border-bottom: 1px solid rgba(66, 72, 81, 0.2);
  border-radius: 0;
  margin-bottom: 12px;
  border-top: 0;      
  border-right: 0;      
  border-left: 0; 
  text-align: left;
  padding: 15px 0;
  height: auto;
  color: inherit;
  font: inherit;
  display: inline-block;    
`;

const Unorder = Styled.ul`
  display: block;
  list-style-type: none;
`;

const List = Styled.li`
`;

const Unordermw = Styled.ul`
  display: flex;
  list-style-type: none;
`;

const Listmw = Styled.li`
    margin: 0 5px;

`;

const SocialList = Styled.div`
`;

const StyledFacebook = Styled(FaFacebook)`
  background: #ffffff;
  color: #3e5b98;
`;

const StyledTwitter = Styled(AiFillTwitterCircle)`
  background: #ffffff;
  color: #4da7de;
`;

const StyledPinterest = Styled(FaPinterest)`
  background: #ffffff;
  color: #c92619;
`;

const StyledInstagram = Styled(AiFillInstagram)`
  background: #ffffff;
  color: #000000;
`;

const SocialWrapper = Styled.div`
  background-color: #E0E0E0;
`;

function LatestArticles(){
  return(
    <Fragment>
      <Nav>
        <Nav>
          <Title>Latest articles</Title>
        </Nav>
        <Subnav>
          <SubLeft>
            <Nav>
              <Nav>
                <Picture src={Image1} alt="" />
              </Nav>
              <Nav>
                <AnchorM>Motivation</AnchorM>
              </Nav>
              <Nav>
                <Subtitle>
                  <Anchor>It's ok to work in a bar while getting a degree</Anchor>
                </Subtitle>
              </Nav>
              <Nav>
                <Link>Progressively evolve functional niches without ethical architectures. Uniquely plagiarize cost effective infomediaries vis-a-vis world-class process improvements. Monotonectally disseminate stand-alone results for virtual processes. Competently...</Link>
              </Nav>
            </Nav>
            <Nav>
              <Nav>
                {/* <Picture src={Image2} alt="" /> */}
              </Nav>
              <Nav>
                <AnchorM>Lifestyle</AnchorM>
              </Nav>
              <Nav>
                <Subtitle>
                  <Anchor>How to master the art of choosing the right gift</Anchor>
                </Subtitle>
              </Nav>
              <Nav>
                <Link>Appropriately optimize team building manufactured products vis-a-vis leading-edge imperatives. Proactively foster high standards in data via cooperative leadership. Conveniently innovate intermandated relationships without flexible opportunities...</Link>
              </Nav>
            </Nav>
              <Nav>
                <Picture src={Image3} alt="" /> 
              </Nav>
              <Nav>
                <AnchorM>Lifestyle</AnchorM>
              </Nav>
              <Nav>
                <Subtitle>
                  <Anchor>Pretending to read while looking out the window</Anchor>
                </Subtitle>
              </Nav>
              <Nav>
                <Link>Objectively disseminate parallel communities whereas premier e-business. Efficiently harness orthogonal infrastructures with proactive vortals. Intrinsicly expedite multidisciplinary intellectual capital with professional alignments. Compellingly...</Link>
              </Nav>
              <Nav>
                <Picture src={Image4} alt="" />
              </Nav>
              <Nav>
                <AnchorM>Lifestyle</AnchorM>
              </Nav>
              <Nav>
                <Subtitle>
                  <Anchor>The perfect afternoon ritual for busy people</Anchor>
                </Subtitle>
              </Nav>
              <Nav>
                <Link>Seamlessly maximize B2B growth strategies with state of the art e-services. Efficiently streamline frictionless collaboration and idea-sharing whereas next-generation potentialities. Proactively create team driven scenarios with client-focused...</Link>
              </Nav>
              <Nav>
                <Picture src={Image5} alt="" />
              </Nav>
              <Nav>
                <AnchorM>Motivation</AnchorM>
              </Nav>
              <Nav>
                <Subtitle>
                  <Anchor>Three proven ways to start your day the right way</Anchor>
                </Subtitle>
              </Nav>
              <Nav>
                <Link>Proactively administrate team building supply chains before virtual convergence. Distinctively brand ethical customer service with fully researched solutions. Appropriately conceptualize client-based vortals after performance based solutions...</Link>
              </Nav>
              <Nav>
                <Picture src={Image6} alt="" />
              </Nav>      
              <Nav>
                <AnchorM>Fashion</AnchorM>
              </Nav>
              <Nav>
                <Subtitle>
                  <Anchor>The perfect color combination for this season</Anchor>
                </Subtitle>
              </Nav>
              <Nav>
                <Link>Competently conceptualize customized channels vis-a-vis process-centric channels. Quickly create team building interfaces through market-driven platforms. Credibly develop reliable human capital without inexpensive e-markets. Professionally matrix...</Link>
              </Nav>
          </SubLeft>
          <SubRight>
            <SubnavRight>
              <Navnewsletter>
                <Subtitle>Newsletter</Subtitle>
                <Link>Make sure to subscribe to our newsletter and be the first to know the news.</Link>
                <Form>
                  <NavForm><Input type="email" id="email" placeholder="Your email address" /></NavForm>
                </Form>
              </Navnewsletter>
            </SubnavRight>
            <SubnavRight>
              <NavTopics>
                <Subtitle>Topics</Subtitle>
                <Unorder>
                  <List>Art</List>                  
                  <List>Fashion</List>                  
                  <List>LifeStyle</List>                  
                  <List>Motivation</List>                  
                  <List>Travel</List>                  
                  <List>Art</List>                  
                </Unorder>
              </NavTopics>
            </SubnavRight>
            <SubnavRight>
              <NavSocial>
                <Subtitle>Let's get social</Subtitle>
                <LinkSocial>We are a team of dedicated professionals delivering high quality WordPress themes and plugins.</LinkSocial>
                <SocialList>
                  <Unordermw>
                    <Listmw><Anchor href="" ><StyledFacebook /></Anchor></Listmw>                  
                    <Listmw><Anchor href=""><StyledTwitter /></Anchor></Listmw>                  
                    <Listmw><Anchor href=""><StyledPinterest /></Anchor></Listmw>                  
                    <Listmw><Anchor href=""><StyledInstagram /></Anchor></Listmw>
                  </Unordermw>
                </SocialList>
              </NavSocial>
            </SubnavRight>
          </SubRight>
        </Subnav>
      </Nav>
      <Nav>
        <SocialWrapper>
          <Title>Social Media Follow</Title>
        </SocialWrapper>
      </Nav>
      <Footer/>
    </Fragment>
  );
};

export default LatestArticles;