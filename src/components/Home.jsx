import React from 'react'
import {Card, CardGroup, Button} from 'react-bootstrap'

export default function Welcome(props) {
 
  const{imgOne,
  poosh4, 
  poosh2, 
  poosh3} = props
   console.log(poosh4)

  return (
    <>
    <h1 className="text-center lead display-1 my-3 py-4">Introducing the book blog </h1>
       <div className='container-fluid '>
    <div className="d-flex justify-content-start">
     <img src={imgOne} alt='img' 
     className=" px-4 rounded mx-auto d-block imgHome "/>
      <p className='p-5 lead text-center mb-5 '>
      Hello everyone my name is <strong>Diane </strong>
      Welcome to my blog. This blog is dedicate to the book lover's whith the goal to 
      showcase my favorite books and invite anyone to leave his
       favorite book in our database for others readers. 
       Reading is good for you because it improves your focus, memory, empathy, and 
       communication skills. It can reduce stress, improve your mental health, and help 
       you live longer. Reading also allows you to learn new things to help you succeed
        in your work and relationships. I also encourage you to writting(journalizing),
         in effect having a journal helps with reduce stress, may boost health and well-being,
         Journaling encourages space from negative thoughts and deepens self-discover.
         I will now introduce you to my favorite writers such as
      </p> 
    </div>
    </div>

    <div className='lead  py-5 mx-5'> 
      
      <h1> <strong>1.Chimamanda Ngozi Adichie</strong> </h1>
      <p > 
      Chimamanda Ngozi Adichie is born 15 September 1977 is a Nigerian writer whose works 
      include novels, short stories and nonfiction. She was described in The Times Literary 
      Supplement as "the most prominent" of a "procession of critically acclaimed young 
      anglophone authors [which] is succeeding in attracting a new generation of readers 
      to African literature", particularly in her second home, the United States.
      Adichie has written the novels Purple Hibiscus (2003), Half of a Yellow Sun (2006), 
      and Americanah (2013), the short story collection The Thing Around Your Neck (2009), 
      and the book-length essay We Should All Be Feminists (2014).[7] Her most recent books 
      are Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions (2017), Zikora (2020) 
      and Notes on Grief (2021)
      </p>
      <h1> <strong>2.Robert Greene</strong> </h1>
      <p className='lead'> 
      Robert Greene (born May 14, 1959) is an American author of books on strategy, power, and 
      seduction. He has written six international bestsellers, includingThe 48 Laws of Power, 
      The Art of Seduction, The 33 Strategies of War, The 50th Law (with rapper 50 Cent), Mastery,
       and The Laws of Human Nature. Greene says that he does not try to follow all of his advice 
       as, "Anybody who did would be a horrible ugly person to be around."
      </p>

      <h1> <strong>3.Paulo Coelho </strong> </h1>
      <p className='lead'> 
      Born in Rio de Janeiro in 1947, he soon discovered his vocation for writing. He worked as
       a director, theater actor, songwriter and journalist. His collaboration with Brazilian
        composer and singer Raul Seixas gave some of the greatest classic rock songs in Brazil.
         In 1986, a special meeting led him to make the pilgrimage to Saint James Compostela 
         (in Spain). The Road to Santiago was not only a common pilgrimage but a turning point
          in his existence. A year later, he wrote The Pilgrimage, an autobiographical novel 
          that is considered the beginning of his career.
      </p>
    </div>

      <div>
      <CardGroup className='p-5'>
      <Card className="card">
        <Card.Img variant="top" src={poosh3}  className='cardImg'/>
        <Card.Body>
          <Card.Title>ANTI-RACISM BOOKS to Educate Yourself</Card.Title>
          <Card.Text>
          We’re dedicated to becoming better allies through educating ourselves
           on racism and addressing the inequality in our world. In addition to
            peacefully protesting, using our voices, pledging as a company to do
             more, and demanding change—helping end racism starts with doing the work. 
             This means taking the time to reflect, reading the books that explain the 
             history of the Black Lives Matter movement...
          </Card.Text>
          <Button
          href='https://poosh.com/anti-racism-books-to-educate-yourself/'
          variant='outline-success'>
            Read More..
            </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      <Card className="card">
        <Card.Img variant="top" src={poosh4} className='cardImg' />
        <Card.Body>
          <Card.Title>THE 10 COFFEE TABLE BOOKS Every Adult Should own</Card.Title>
          <Card.Text>
          A coffee table book will tell a guest two things about you: you’re well-read 
          and you appreciate decor. Not to mention, they also make for a great hostess 
          gift and can be the perfect conversation starter. More importantly, when on display, 
          they sophisticate any space. And yes, Kourt has all of these placed around her home.
          </Card.Text>
          <Button
          href='https://poosh.com/cool-coffee-table-books/'
          variant='outline-success'>
            Read More..
            </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={poosh2} className='cardImg' />
        <Card.Body>
          <Card.Title className='py-5'>How to Do a  BOOKSHELF PROPERLY</Card.Title>
          <Card.Text className=''>
          Staging a bookshelf is like a puzzle—you have to find the right colors, 
          sizes, and shapes that perfectly fit together. Some people have the eye for it, 
          and others … well, that’s when we look to Pinterest and experts for inspiration. 
          We chatted with interior designer, Chiara de Rege, who is the mastermind behind 
          The Wing’s interior space
          </Card.Text>
          <Button
          href='https://poosh.com/bookshelf-decor/'
          variant='outline-success'>
            Read More..  
            </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      
      
    </CardGroup>
    </div>
      </>
  )
}
