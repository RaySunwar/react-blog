import React, { Fragment } from "react";
import styled from "styled-components";
import Image1 from "./../images/image1.jpg";
import Image2 from "./../images/image2.jpg";
import Image3 from "./../images/image3.jpg"; 
import Image4 from "./../images/image4.jpg"; 
import Image5 from "./../images/image5.jpg"; 
import Image6 from "./../images/image6.jpg"; 
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Footer from "./../footer/footer";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const Nav = styled.div`
  background-color: #ffffff;
  font-family: "Mulish", sans-serif;
`;

const Subnav = styled.div`
  display: flex;
  width: 100%;
`;

const Sectionleft = styled.div` 
  display: block;
  margin-left: 1rem;
  width: 65%;
`;

const Section = styled.section`
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  color: #424851;
  font-family: "Mulish", "Arial", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  padding-top: 2rem;
  text-align: center;
`;

const TitleI = styled.h2`
  color: #424851;
  font-size: 3rem;
  font-weight: 900;
  margin-left: 4rem;
`;

const TitleII = styled.h3`
  color: #424851;
  font-family: "Mulish", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 1.5rem;
`;

const Titleii = styled.h3`
  color: #ffffff;
  font-family: "Mulish", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 1.5rem;
`;

const Author = styled.p`
  color: #424851;
  font-size: 1rem;
  font-weight: 900;
  margin: 0 0 0 4rem;
`;

const Article = styled.p`
  color: #424851;
  font-family: "Mulish", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 24px;
  margin-left: 4rem;
  padding-bottom: 3rem;
`;

const ArticleI = styled.p`
  color: #424851;
  font-family: "Mulish", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  max-width: 300px;
  margin-left: 1.5rem;
`;

const Articlei = styled.p`
  color: #ffffff;
  font-family: "Mulish", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  max-width: 300px;
  margin-left: 1.5rem;
`;

const Span = styled.span`
  color: #f13b3b;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Anchor = styled.a`
  background: #f13b3b;
  box-sizing: border-box;
  box-shadow: 0 10px 15px 0 rgba(241, 59, 59, 0.2);
  color: #ffffff;
  display: inline-block;
  font-size: 1rem;
  font-weight: 900;
  float: none;
  margin-left: 4rem;
  position: static;
  text-decoration: none;
  padding: 5px 20px 5px 20px;
`;

const AnchorI = styled.a`
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 0;
  text-align: center;
  text-decoration: none;
  letter-spacing: normal;
`;

const Picture = styled.img`
  height: 491px;
  width: 735px;
  object-fit: cover;
  padding-bottom: 1rem;
`;

const Navnewsletter = styled.div`
  background-color: #E0E0E0;
  padding: 2.5rem;
  max-width: 400px;
`;

const NavTopics = styled.div`
  background-color: #E0E0E0;
  max-width: 400px;
  padding: 1rem;

`;

const SectionRight = styled.div`
  display: block;
  margin: 0 5rem 0 2.5rem;
  width:45%;
`;

const SubnavRight = styled.div`
  margin: 0 0 2rem 0;
`;

const NavSocial = styled.div`
  background-color: #424851;
  color: #ffffff;
  padding: 1rem;
`;

const Form = styled.form`
  color: #424851;
  display: block;
  font-family: "Mulish", sans-serif;
  padding: 1rem;
`;

const NavForm = styled.div`
`;

const Input = styled.input`
  border: 1px solid rgba(66, 72, 81, 0.2);
  background: 0;
  border-top: 0;      
  border-right: 0;      
  border-left: 0; 
  text-align: left;
  padding: 15px 0;
  outline: none;
  width: 100%;
  height: auto;
  color: inherit;
  display: inline-block;  
  vertical-align: baseline;
`;

const Suscribe = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const InputI = styled.input`
  color: #ffffff;
  background: #f13b3b;
  border: none;
  margin: 0;
  padding: 10px;
  font-family: "Mulish", sans-serif;  
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const Unorder = styled.ul`
  display: block;
  list-style-type: none;
`;

const List = styled.li`
  font-family: "Mulish", sans-serif;
`;

const Unordersocial = styled.ul`
  display: flex;
  list-style-type: none;
`;

const Listitemsocial = styled.li`
  margin: 0 5px;
`;

const styledFacebook = styled(FaFacebook)`
  color: #3e5b98;
  // width: 50px;
  // height: 50ps;
  // font-size: 16px;
  // line-height: 55px;
  // border-radius: 50%;
`;

const SocialWrapper = styled.div`
  background-color: #E0E0E0;
`;

const styledTwitter = styled(AiFillTwitterCircle)`
  color: #4da7de;
`;

const styledPinterest = styled(FaPinterest)`
  color: #c92619;
`;

const styledInstagram = styled(AiFillInstagram)`
  color: #000000;
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
                <TitleII>Newsletter</TitleII>
                <ArticleI>Make sure to subscribe to our newsletter and be the first to know the news.</ArticleI>
                <Form>
                  <NavForm>
                    <Input type="email" id="email" placeholder="Your email address" />
                  </NavForm>
                </Form>
                <Suscribe>
                  <InputI className="button" type="submit" value="Suscribe" name="suscribe"></InputI>
                </Suscribe>
              </Navnewsletter>
            </SubnavRight>
            <SubnavRight>
              <NavTopics>
                <TitleII>Topics</TitleII>
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
                <Titleii>Let's get social</Titleii>
                <Articlei>We are a team of dedicated professionals delivering high quality WordPress themes and plugins.</Articlei>
                <Section>
                  <Unordersocial>
                    <Listitemsocial><AnchorI href="" ><styledFacebook /></AnchorI></Listitemsocial>                  
                    <Listitemsocial><AnchorI href=""><styledTwitter /></AnchorI></Listitemsocial>                  
                    <Listitemsocial><AnchorI href=""><styledPinterest /></AnchorI></Listitemsocial>                  
                    <Listitemsocial><AnchorI href=""><styledInstagram /></AnchorI></Listitemsocial>
                  </Unordersocial>
                </Section>
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