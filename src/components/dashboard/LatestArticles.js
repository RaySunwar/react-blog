import React, { Fragment } from "react";
import Styled from "styled-components";
import Image1 from "./../images/image1.jpg";
import Image2 from "./../images/image2.jpg";
import Image3 from "./../images/image3.jpg"; 
import Image4 from "./../images/image4.jpg"; 
import Image5 from "./../images/image5.jpg"; 
import Image6 from "./../images/image6.jpg"; 
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Footer from "./../footer/footer";

const Wrapper = Styled.div`
  margin: 0;
  padding: 0;
`;

const Nav = Styled.div`
  background-color: #ffffff;
  font-family: "Mulish", sans-serif;
`;

const Subnav = Styled.div`
  display: flex;
  width: 100%;
`;

const Sectionleft = Styled.div` 
  display: block;
  margin-left: 1rem;
  width: 65%;
`;

const SectionRight = Styled.div`
  display: block;
  margin: 0 5rem 0 2.5rem;
  width:45%;
`;

const Section = Styled.section`
  margin: 0;
  padding: 0;
`;

const SubnavRight = Styled.div`
  margin: 0 0 2rem 0;
`;
const Title = Styled.h1`
  color: #424851;
  font-family: "Mulish", "Arial", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  padding-top: 2rem;
  text-align: center;
`;

const TitleI = Styled.h2`
  color: #424851;
  font-size: 3rem;
  font-weight: 900;
  margin-left: 4rem;
  &:hover {
    color: #f13b3b;
  }
`;

const Author = Styled.p`
  color: #424851;
  font-size: 1rem;
  font-weight: 900;
  margin: 0 0 0 4rem;
`;

const Article = Styled.p`
  color: #424851;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 24px;
  margin-left: 4rem;
  padding-bottom: 3rem;
`;

const Span = Styled.span`
  margin: 0;
  padding: 0;
  color: #f13b3b;
  font weigth: 700;
`;

const Anchor = Styled.a`
  background: #f13b3b;
  box-sizing: border-box;
  box-shadow: 0 10px 15px 0 rgba(241, 59, 59, 0.2);
  color: #ffffff;
  display: inline-block;
  font-size: 1rem;
  font-weight: 800;
  float: none;
  margin-left: 4rem;
  position: static;
  text-decoration: none;
  padding: 5px 20px 5px 20px;
`;

const AnchorI = Styled.a`

`;
const Picture = Styled.img`
  height: 491px;
  width: 735px;
  object-fit: cover;
  padding-bottom: 1rem;
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

const ArticleSocial = Styled.p`
  color: #ffffff;
`;

const Form = Styled.form`
  display: block;
`;

const NavForm = Styled.div`
  display: block;
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
      <Wrapper>
        <Nav>
          <Title>Latest articles</Title>
        </Nav>
        <Subnav>
          <Sectionleft>
            <Nav>
              <Section>
                <Picture src={Image1} alt="" />
              </Section>
              <Section>
                <Anchor>Motivation</Anchor>
              </Section>
              <Section>
                <TitleI>It's ok to work in a bar while getting a degree</TitleI>
              </Section>
              <Section>
                <Author>by <Span>Brad Watt</Span></Author>
              </Section>
              <Section>
                <Article>Progressively evolve functional niches without ethical architectures. Uniquely plagiarize cost effective infomediaries vis-a-vis world-class process improvements. Monotonectally disseminate stand-alone results for virtual processes. Competently...</Article>
              </Section>
            </Nav>
            <Nav>
              <Section>
                <Picture src={Image2} alt="" />
              </Section>
              <Section>
                <Anchor>Lifestyle</Anchor>
              </Section>
              <Section>  
                <TitleI>How to master the art of choosing the right gift</TitleI>
              </Section>
              <Section>
                <Author>by <Span>Brad Watt</Span></Author>
              </Section>
              <Section>
                <Article>Appropriately optimize team building manufactured products vis-a-vis leading-edge imperatives. Proactively foster high standards in data via cooperative leadership. Conveniently innovate intermandated relationships without flexible opportunities...</Article>
              </Section>
            </Nav>
            <Nav>
              <Section>
                <Picture src={Image3} alt="" /> 
              </Section>
              <Section>
                <Anchor>Lifestyle</Anchor>
              </Section>
              <Section>
                  <TitleI>Pretending to read while looking out the window</TitleI>
              </Section>
              <Section>
                <Author>by <Span>Brad Watt</Span></Author>
              </Section>
              <Section>
                <Article>Objectively disseminate parallel communities whereas premier e-business. Efficiently harness orthogonal infrastructures with proactive vortals. Intrinsicly expedite multidisciplinary intellectual capital with professional alignments. Compellingly...</Article>
              </Section>
            </Nav>
            <Nav>
              <Section>
                <Picture src={Image4} alt="" />
              </Section>
              <Section>
                <Anchor>Lifestyle</Anchor>
              </Section>
              <Section>
                  <TitleI>The perfect afternoon ritual for busy people</TitleI>
              </Section>
              <Section>
                <Author>by <Span>Brad Watt</Span></Author>
              </Section>
              <Section>
                <Article>Seamlessly maximize B2B growth strategies with state of the art e-services. Efficiently streamline frictionless collaboration and idea-sharing whereas next-generation potentialities. Proactively create team driven scenarios with client-focused...</Article>
              </Section>
            </Nav>
            <Nav>
              <Section>
                <Picture src={Image5} alt="" />
              </Section>
              <Section>
                <Anchor>Motivation</Anchor>
              </Section>
              <Section>
                <TitleI>Three proven ways to start your day the right way</TitleI>
              </Section>
              <Section>
                <Author>by <Span>Brad Watt</Span></Author>
              </Section>
              <Section>
                <Article>Proactively administrate team building supply chains before virtual convergence. Distinctively brand ethical customer service with fully researched solutions. Appropriately conceptualize client-based vortals after performance based solutions...</Article>
              </Section>
            </Nav>
            <Nav>
              <Section>
                <Picture src={Image6} alt="" />
              </Section>      
              <Section>
                <Anchor>Fashion</Anchor>
              </Section>
              <Section>
                <TitleI>The perfect color combination for this season</TitleI>
              </Section>
              <Section>
                <Author>by <Span>Brad Watt</Span></Author>
              </Section>
              <Section>
                <Article>Competently conceptualize customized channels vis-a-vis process-centric channels. Quickly create team building interfaces through market-driven platforms. Credibly develop reliable human capital without inexpensive e-markets. Professionally matrix...</Article>
              </Section>
            </Nav>
          </Sectionleft>
          <SectionRight>
            <SubnavRight>
              <Navnewsletter>
                <Article>Newsletter</Article>
                <Article>Make sure to subscribe to our newsletter and be the first to know the news.</Article>
                <Form>
                  <NavForm><Input type="email" id="email" placeholder="Your email address" /></NavForm>
                </Form>
              </Navnewsletter>
            </SubnavRight>
            <SubnavRight>
              <NavTopics>
                <Article>Topics</Article>
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
                <Article>Let's get social</Article>
                <ArticleSocial>We are a team of dedicated professionals delivering high quality WordPress themes and plugins.</ArticleSocial>
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
          </SectionRight>
        </Subnav>
      </Wrapper>
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