import './App.css';
import Books from './Components/Books';

const books = [
  {
    bID: 1,
    bName: 'To Kill a Mockingbird',
    bAuthor: 'Harper Lee',
    desc: ' Eight-year-old Scout Finch and her father, Atticus, find themselves enmeshed in the trial of a Black man accused of raping a White woman. In one of the most deeply sad books, Lee tells the events, revelations, and lessons through the eyes of a young child.',
    year: '1960',
    price: 10,
    isAvailable: true,
    image: "images/tkam.jpeg"
  },
  {
    bID: 2,
    bName: 'Where the Sidewalk Ends',
    bAuthor: 'Shel Silverstein',
    desc: ' The imagination and artistry of Shel Silverstein are on full display in this classic collection of short stories and poems. Where the Sidewalk Ends is truly one of the best poetry books of all time because of its staying power for children and adults alike.',
    year: '1974',
    price: 18,
    isAvailable: true,
    image: "images/wtse.jpeg"
  },
  {
    bID: 3,
    bName: 'Valley of the Dolls',
    bAuthor: 'Jacqueline Susann',
    desc: ' Sex and drugs have a common allure, but they also have a common endgame: a downward spiral. In Valley of the Dolls, Jacqueline Susann offers in lurid detail the stories of three young women who want nothing more than to reach the pinnacle of life.',
    year: '1966',
    price: 23,
    isAvailable: false,
    image: "images/votd.jpeg"
  },
  {
    bID: 4,
    bName: 'The Shining',
    bAuthor: 'Stephen King',
    desc: 'The master of suspense must be included in any list of books you should read in a lifetime. This is one of the scariest and best Stephen King books of all time. ',
    year: '1977',
    price: 8,
    isAvailable: true,
    image: "images/shining.jpeg"
  },
  {
    bID: 5,
    bName: 'The Little Prince',
    bAuthor: 'Antoine de Saint-Exupéry',
    desc: ' The Little Prince is a timeless tale of a prince’s journey from planet to planet in search of adventure. What he finds, however, are interactions with adults who leave him frustrated or dismayed.',
    year: '1943',
    price: 4,
    isAvailable: false,
    image: "images/tlp.jpeg"
  },
  {
    bID: 6,
    bName: 'The Fellowship of the Ring',
    bAuthor: 'J.R.R. Tolkein',
    desc: ' In The Fellowship of the Ring, the first book in the Lord of the Rings trilogy, journey to Middle-earth and into the world of Frodo Baggins, Samwise Gamgee, Gandalf the Grey, the dark lord Sauron, and the entire assemblage of Tolkien’s most famous characters and story lines. Frodo is tasked with destroying the One Ring, the most powerful Ring in Mordor, but along the way, his quest is filled with many of Tolkien’s unique and captivating characters, as well as an adventure of epic proportions.',
    year: '1954',
    price: 28,
    isAvailable: true,
    image: "images/tfotr.jpeg"
  },
  {
    bID: 7,
    bName: 'The Handmaid’s Tale',
    bAuthor: 'Margaret Atwood',
    desc: ' Offred, a handmaid in the Republic of Gilead, has been removed from the home, family, and life that she knew only to be forced into service as a housemaid—and a working pair of ovaries. As the population of Gilead falls, a woman’s value becomes contingent upon her fertility and ability to reproduce, and those who can procreate are stripped of their independence.',
    year: '1985',
    price: 14,
    isAvailable: false,
    image: "images/tht.jpeg"
  },
  {
    bID: 8,
    bName: 'A Wrinkle in Time',
    bAuthor: 'Madeleine L’Engle',
    desc: ' A Wrinkle in Time has long been held as a must-read for its fantastical telling of splitting the fabric of time and space. A Newbery Medal winner, this science-fantasy novel follows troublesome and stubborn Meg Murry as she confronts her father’s mysterious disappearance with a collection of peculiar neighbors: Mrs. Whatsit, Mrs. Who, and Mrs. Which.',
    year: '1962',
    price: 19,
    isAvailable: true,
    image: "images/awit.jpeg"
  },
  {
    bID: 9,
    bName: 'Beloved',
    bAuthor: 'Toni Morrison',
    desc: 'Toni Morrison’s Beloved stares down the horrors of slavery and transforms a narrative you think you’ve read a hundred times into a towering tale of pain, agony, triumph, and freedom. The story of Sethe, the novel’s protagonist, is gut-wrenchingly honest and simultaneously beautiful and hideous.',
    year: '1987',
    price: 18,
    isAvailable: true,
    image: "images/beloved.jpeg"
  },
  {
    bID: 10,
    bName: 'Dune',
    bAuthor: 'Frank Herbert',
    desc: 'A science fiction novel for the ages, Frank Herbert’s Dune tells the adventures of Paul Atreides—who will become known as Muad’Dib—as he and his family strive to bring humankind’s greatest dream to life while living on a desert planet. ',
    year: '1965',
    price: 9,
    isAvailable: true,
    image: "images/dune.jpeg"
  },
  {
    bID: 11,
    bName: '1984',
    bAuthor: 'George Orwell',
    desc: 'George Orwell certainly couldn’t have known how prophetic his words might have been when he wrote the dystopian novel 1984 in the mid-20th century. Great Britain has fallen and given way to Airstrip One, a province of the fictional superstate Oceania.  Winston Smith, the book’s leading character, must navigate the Party, Big Brother, and his thoughts, which grow more criminal by the day.',
    year: '1949',
    price: 20,
    isAvailable: false,
    image: "images/1984.jpeg"
  },
  {
    bID: 12,
    bName: 'Fahrenheit 451',
    bAuthor: 'Ray Bradbury',
    desc: 'Guy Montag’s existence in Fahrenheit 451 might hit a little close to home: He’s a fireman in a futuristic dystopian world whose job is to find and destroy the illegal commodities of a world whose sole focus is television: books.',
    year: '1953',
    price: 9,
    isAvailable: true,
    image: "images/451.jpeg"
  },
  {
    bID: 13,
    bName: 'Harry Potter and the Sorcerer’s Stone',
    bAuthor: 'J.K. Rowling',
    desc: 'In J.K. Rowling’s first installment of the beloved series, Harry Potter and the Sorcerer’s Stone, you will be introduced to many of the story’s most important—and entrancing—characters: Harry, Hermione, Ron, Dumbledore, Hagrid, and more. ',
    year: '1997',
    price: 5,
    isAvailable: true,
    image: "images/hp.jpeg"

  },
  {
    bID: 14,
    bName: 'The Fault in Our Stars',
    bAuthor: 'John Green',
    desc: 'She thought a cancer diagnosis had sealed her fate and written her life story, but a chance meeting with Augustus Waters turns Hazel Lancaster’s life upside down.',
    year: '2012',
    price: 24,
    isAvailable: false,
    image: "images/tfios.jpeg"
  },
  {
    bID: 15,
    bName: 'Catch-22',
    bAuthor: 'Joseph Heller',
    desc: 'Yossarian, a member of an Italian bomber crew during World War II, is desperate to excuse himself from the increasingly high number of suicidal missions his commanders force him and his servicemen to fly. The catch comes when he realizes the sinister bureaucratic rule, Catch-22, classifies him as sane—and thus ineligible for relief—if he requests to be removed from duty. ',
    year: '1961',
    price: 31,
    isAvailable: true,
    image: "images/c22.jpeg"

  },
  {
    bID: 16,
    bName: 'Me Talk Pretty One Day',
    bAuthor: 'David Sedaris',
    desc: ' This laugh-out-loud collection of short stories makes for great leisurely reading. In Me Talk Pretty One Day, David Sedaris shares the absurd and hysterical twists he was able to tease out of life’s more mundane and boring events growing up in Raleigh, North Carolina.',
    year: '2000',
    price: 11,
    isAvailable: true,
    image: "images/mtpod.jpeg"
  }]

function App(){
 return (

  <ul className="list-group justify-content-end">
    <div className='row d-flex flex-row mx-3'>
      <div className='col-lg-4 col-md-4 col-sm-12'>
        <div className='card sticky-top m-2'>
          <h1 className='card-body'> this is a header</h1>

        </div>
        
      </div>
      <div className='col-lg-8 col-md-8 col-sm-12'>
          <Books className="bookCard"
              id={books[0].bID} 
              name={books[0].bName}
              author={books[0].bAuthor}
              description={books[0].desc}
              isAvailable={books[0].isAvailable}
              imageURL={books[0].image}
              price={books[0].price}
              year={books[0].year}>
              
        </Books>
        <Books 
              id={books[1].bID} 
              name={books[1].bName}
              author={books[1].bAuthor}
              description={books[1].desc}
              isAvailable={books[1].isAvailable}
              imageURL={books[1].image}
              price={books[1].price}
              year={books[1].year}>
        </Books>
        <Books 
              id={books[2].bID} 
              name={books[2].bName}
              author={books[2].bAuthor}
              description={books[2].desc}
              isAvailable={books[2].isAvailable}
              imageURL={books[2].image}
              price={books[2].price}
              year={books[2].year}>
        </Books>
        <Books 
              id={books[3].bID} 
              name={books[3].bName}
              author={books[3].bAuthor}
              description={books[3].desc}
              isAvailable={books[3].isAvailable}
              imageURL={books[3].image}
              price={books[3].price}
              year={books[3].year}>
        </Books>
        <Books 
              id={books[4].bID} 
              name={books[4].bName}
              author={books[4].bAuthor}
              description={books[4].desc}
              isAvailable={books[4].isAvailable}
              imageURL={books[4].image}
              price={books[4].price}
              year={books[4].year}>
        </Books>
        <Books 
              id={books[5].bID} 
              name={books[5].bName}
              author={books[5].bAuthor}
              description={books[5].desc}
              isAvailable={books[5].isAvailable}
              imageURL={books[5].image}
              price={books[5].price}
              year={books[5].year}>
        </Books>
        <Books 
              id={books[6].bID} 
              name={books[6].bName}
              author={books[6].bAuthor}
              description={books[6].desc}
              isAvailable={books[6].isAvailable}
              imageURL={books[6].image}
              price={books[6].price}
              year={books[6].year}>
        </Books>
        <Books 
              id={books[7].bID} 
              name={books[7].bName}
              author={books[7].bAuthor}
              description={books[7].desc}
              isAvailable={books[7].isAvailable}
              imageURL={books[7].image}
              price={books[7].price}
              year={books[7].year}>
        </Books>
        <Books 
              id={books[8].bID} 
              name={books[8].bName}
              author={books[8].bAuthor}
              description={books[8].desc}
              isAvailable={books[8].isAvailable}
              imageURL={books[8].image}
              price={books[8].price}
              year={books[8].year}>
        </Books>
        <Books 
              id={books[9].bID} 
              name={books[9].bName}
              author={books[9].bAuthor}
              description={books[9].desc}
              isAvailable={books[9].isAvailable}
              imageURL={books[9].image}
              price={books[9].price}
              year={books[9].year}>
        </Books>
        <Books 
              id={books[10].bID} 
              name={books[10].bName}
              author={books[10].bAuthor}
              description={books[10].desc}
              isAvailable={books[10].isAvailable}
              imageURL={books[10].image}
              price={books[10].price}
              year={books[10].year}>
        </Books>
        <Books 
              id={books[11].bID} 
              name={books[11].bName}
              author={books[11].bAuthor}
              description={books[11].desc}
              isAvailable={books[11].isAvailable}
              imageURL={books[11].image}
              price={books[11].price}
              year={books[11].year}>
        </Books>
        <Books 
              id={books[12].bID} 
              name={books[12].bName}
              author={books[12].bAuthor}
              description={books[12].desc}
              isAvailable={books[12].isAvailable}
              imageURL={books[12].image}
              price={books[12].price}
              year={books[12].year}>
        </Books>
        <Books 
              id={books[13].bID} 
              name={books[13].bName}
              author={books[13].bAuthor}
              description={books[13].desc}
              isAvailable={books[13].isAvailable}
              imageURL={books[13].image}
              price={books[13].price}
              year={books[13].year}>
        </Books>
        <Books 
              id={books[14].bID} 
              name={books[14].bName}
              author={books[14].bAuthor}
              description={books[14].desc}
              isAvailable={books[14].isAvailable}
              imageURL={books[14].image}
              price={books[14].price}
              year={books[14].year}>
        </Books>
        <Books 
              id={books[15].bID} 
              name={books[15].bName}
              author={books[15].bAuthor}
              description={books[15].desc}
              isAvailable={books[15].isAvailable}
              imageURL={books[15].image}
              price={books[15].price}
              year={books[15].year}>
        </Books>
      </div>   
      </div>
     </ul>
 );
   
}

export default App;