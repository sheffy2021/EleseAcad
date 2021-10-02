import React from 'react'
import { Container, NewsLetterContent, NewsLetterData, NewsLetterDataH3, NewsLetterDataP, NewsLetterEmail, NewsLetterLink, NewsLetterS } from './Styling'

const NewsLetter = () => {
    return (
        <div>
        <NewsLetterS className="section" id="contact">
        <Container>
          <NewsLetterContent>
            <NewsLetterData>
              <NewsLetterDataH3>SUBSCRIBE TO OUR NEWSLETTER</NewsLetterDataH3>
              <NewsLetterDataP>A short sentence describing what someone will receive by subscribing</NewsLetterDataP>
            </NewsLetterData>
            <form action="/">
              <NewsLetterEmail type="email" placeholder="Enter your email address"/>
              <NewsLetterLink to="/">subscribe</NewsLetterLink>
            </form>
          </NewsLetterContent>
        </Container>
      </NewsLetterS>
        </div>
    )
}

export default NewsLetter
