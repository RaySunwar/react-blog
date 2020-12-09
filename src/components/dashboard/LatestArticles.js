import React, { Fragment } from "react";
import styled from "styled-components";
import breakpoints from "./../../mediaQueries";
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
  margin: 0 64px;
  padding: 0;

  @media ${breakpoints.Mobile}{
    margin: 0 10px;
    max-width: 480px;
  }

  @media ${breakpoints.Tablet}{
    margin: 0 30px;
    max-width: 768px;
    padding: 0 10px;
  }

  @media ${breakpoints.Laptop}{
    margin: 0 14px;
    max-width: 1024px;
  }
`;

const Nav = styled.div`
  background-color: #ffffff;
  font-family: "Mulish", sans-serif;
`;

const Subnav = styled.div`
  display: flex;
  width: 100%;

  @media ${breakpoints.Mobile}{
    display: block;
  }

  @media ${breakpoints.Tablet}{
    display: block;
  }
`;

const Sectionleft = styled.div` 
  display: block;
  width: 65%;

  @media ${breakpoints.Mobile}{
    display: block;
    width: 100%;
    margin-left: 0;
  } 

  @media ${breakpoints.Tablet}{
    display: block;
    width: 100%;
    margin-left: 0;
  }
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
  text-align: center;

  @media ${breakpoints.Mobile}{
    font-size: 1.7rem;
    padding-top: 0;
  }
`;

const TitleI = styled.h2`
  color: #424851;
  font-size: 2.3rem;
  font-weight: 900;
  margin-left: 4rem;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 120%;

  @media ${breakpoints.Mobile}{
    font-size: 1.7rem;
    line-height: 1;
    margin-top: 8px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    justify-content: center;
  }

  @media ${breakpoints.Tablet}{
    font-size: 1.7rem;
    line-height: 1;
    margin-top: 8px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    justify-content: center;
  }
`;

const TitleII = styled.h3`
  color: #424851;
  font-family: "Mulish", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 1.5rem;

  @media ${breakpoints.Mobile}{
    margin: 0 0 1rem 0;
  }
`;

const Titleii = styled.h3`
  color: #ffffff;
  font-family: "Mulish", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 1.5rem;
`;

const Author = styled.p`
  color: #989da2;
  font-size: 1rem;
  font-weight: 900;
  margin: 0 0 0 4rem;

  @media ${breakpoints.Mobile}{
    font-size: 1rem;
    margin-left: 0;
    margin-top: 5px;
    margin-right: 0;
    margin-bottom: 0;
  }

  @media ${breakpoints.Tablet}{
    font-size: 1rem;
    margin-left: 0;
    margin-top: 5px;
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const Article = styled.p`
  color: #424851;
  font-family: "Mulish", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 24px;
  margin-left: 4rem;
  padding-bottom: 85px;

  @media ${breakpoints.Mobile}{
    font-size: 1rem;
    justify-content: center;
    margin-left: 0;
    margin-top: 12px;
    margin-right: 0;
    margin-bottom: 0;
  }

  @media ${breakpoints.Tablet}{
    font-size: 1rem;
    justify-content: center;
    margin-left: 0;
    margin-top: 12px;
    margin-right: 0;
    margin-bottom: 0;
  }

  @media ${breakpoints.Laptop}{
    font-size: 1rem;
    justify-content: center;
    margin-left: 0;
    margin-top: 12px;
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const ArticleI = styled.p`
  color: #424851;
  font-family: "Mulish", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  max-width: 300px;
  margin-left: 1.5rem;
  
  @media ${breakpoints.Mobile}{
    margin: 0;
  }

  @media ${breakpoints.Tablet}{
    margin: 0;
  }
  
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

const AnchorP = styled.a`
  color: #424851;
  background-color: transparent;
  text-decoration: none;
  position: relative;
  display: block;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.35 ease-in-out;
  }

  img {
    display: block;
  }

  &:hover{
    &:before {
      opacity: 1;
    }
  };
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
  margin-top: 20px;
  position: static;
  text-decoration: none;
  padding: 5px 20px 5px 20px;

  @media ${breakpoints.Mobile}{
    margin:0;
    margin-top: 0;
  }

  @media ${breakpoints.Tablet}{
    margin-left: 0;
    margin-top: 6px;
    padding: 5px 15px 5px 15px;
  }
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
  object-fit: cover;
  width: 100%;
  
 @media ${breakpoints.Mobile}{
  height: auto;
  width: 100%;
  padding-bottom: 8px;
  object-fit: cover;
 }
`;

const Navnewsletter = styled.div`
  background-color: #E0E0E0;
  padding: 2.5rem;
  max-width: 400px;

  @media ${breakpoints.Mobile}{
    max-width: 768px;
    padding: 15px;
  }
  
  @media ${breakpoints.Tablet}{
    max-width: 768px;
    padding: 15px;
  }
`;

const NavTopics = styled.div`
  background-color: #E0E0E0;
  max-width: 400px;
  padding: 1rem;

  @media ${breakpoints.Mobile}{
    max-width: 768px;
  }

  @media ${breakpoints.Tablet}{
    max-width: 768px;
  }
`;

const SectionRight = styled.div`
  display: block; 
  padding-left: 50px;
  width: 35%;

  @media ${breakpoints.Mobile}{
    margin: 0;
    padding: 0;
    width: 100%;
  }

  @media ${breakpoints.Tablet}{
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const SubnavRight = styled.div`
  padding-bottom: 2.5rem;
  max-width: 764px;

  @media ${breakpoints.Mobile}{
    display: block;
    max-width: 480px;
    height: auto;
    width: 100%;
  }

  @media ${breakpoints.Tablet}{
    display: block;
    max-width: 768px;
    height: auto;
    width: 100%;
  }
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

  
  @media ${breakpoints.Mobile}{
    padding: 1rem 0;  
  }
`;

const NavForm = styled.div`
 margin: 0;
 padding: 0;
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

  @media ${breakpoints.Mobile}{
    padding-left: 0;
    padding-right: 0;
  }
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

const StyledFacebook = styled(FaFacebook)`
  color: #3e5b98;
`;

const SocialWrapper = styled.div`
  background-color: #E0E0E0;
`;

const StyledTwitter = styled(AiFillTwitterCircle)`
  color: #4da7de;
`;

const StyledPinterest = styled(FaPinterest)`
  color: #c92619;
`;

const StyledInstagram = styled(AiFillInstagram)`
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
                <AnchorP href="">
                  <Picture src={Image1} alt="" />
                </AnchorP>
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
                <AnchorP href="">
                  <Picture src={Image2} alt="" />
                </AnchorP>
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
                <AnchorP href="">
                  <Picture src={Image3} alt="" /> 
                </AnchorP>
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
                <AnchorP href="">
                  <Picture src={Image4} alt="" />
                </AnchorP>
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
                <AnchorP href="">
                  <Picture src={Image5} alt="" />
                </AnchorP>
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
                <AnchorP href="">
                  <Picture src={Image6} alt="" />
                </AnchorP>
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
                    <Listitemsocial><AnchorI href="" ><StyledFacebook /></AnchorI></Listitemsocial>                  
                    <Listitemsocial><AnchorI href=""><StyledTwitter /></AnchorI></Listitemsocial>                  
                    <Listitemsocial><AnchorI href=""><StyledPinterest /></AnchorI></Listitemsocial>                  
                    <Listitemsocial><AnchorI href=""><StyledInstagram /></AnchorI></Listitemsocial>
                  </Unordersocial>
                </Section>
              </NavSocial>
            </SubnavRight>
          </SectionRight>
        </Subnav>

        <Nav>
          <SocialWrapper>
            <Title>Social Media Follow</Title>
          </SocialWrapper>
        </Nav>
      </Wrapper>
      <Footer/>
    </Fragment>
  );
};

export default LatestArticles;