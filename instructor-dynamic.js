/* eslint linebreak-style: ["error", "windows"] */
/* Create Instructor Section Dynamically */

const section = document.querySelector('#speakers');

const InstructorsDataBase = [
  {
    image: 'images/sp-image1.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Computer Science at Harvard',
    detail: 'Benkler studies commons based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    image: 'images/sp-image2.png',
    name: 'Sammy Berky',
    title: 'CTO at Google Dev Academy',
    detail: 'Sammy has a lot of experience about NLP technics and AI integration into Learning process.',
  },
  {
    image: 'images/sp-image3.png',
    name: 'Sammy Berky',
    title: 'CTO at Google Dev Academy',
    detail: 'Sammy has a lot of experience about NLP technics and AI integration into Learning process.',
  },
  {
    image: 'images/sp-image4.png',
    name: 'Sammy Berky',
    title: 'CTO at Google Dev Academy',
    detail: 'Sammy has a lot of experience about NLP technics and AI integration into Learning process.',
  },
  {
    image: 'images/sp-image5.png',
    name: 'Sammy Berky',
    title: 'CTO at Google Dev Academy',
    detail: 'Sammy has a lot of experience about NLP technics and AI integration into Learning process.',
  },
  {
    image: 'images/sp-image6.png',
    name: 'Sammy Berky',
    title: 'CTO at Google Dev Academy',
    detail: 'Sammy has a lot of experience about NLP technics and AI integration into Learning process.',
  },
];

const loadInstructor = (data) => {
  const headingCont = document.createElement('div');
  headingCont.id = 'heading-container2';
  section.appendChild(headingCont);

  const sectionHeading = document.createElement('h2');
  sectionHeading.className = 'lato dark section-heading';
  sectionHeading.id = 'speakers-heading';
  sectionHeading.innerText = 'Instructors';
  headingCont.appendChild(sectionHeading);
  const indicator = document.createElement('div');
  indicator.id = 'indicator2';
  indicator.className = 'indicator red-bg';
  headingCont.appendChild(indicator);

  const cardCont = document.createElement('div');
  cardCont.id = 'speaker-cards-container';
  section.appendChild(cardCont);

  for (let i = 0; i < data.length; i += 1) {
    const order = i + 1;
    const instructorCard = document.createElement('div');
    instructorCard.id = `speaker-card${order}`;
    instructorCard.className = 'speaker-card';
    cardCont.appendChild(instructorCard);

    const cardImg = document.createElement('div');
    cardImg.id = `sp-img${order}`;
    cardImg.className = 'sp-img';
    const imgLink = data[i].image;
    cardImg.style = `background-image: ${imgLink};`;
    instructorCard.appendChild(cardImg);

    const cardInfo = document.createElement('div');
    cardInfo.id = `sp-info${order}`;
    cardInfo.className = 'sp-info';
    instructorCard.appendChild(cardInfo);

    const cardName = document.createElement('p');
    cardName.id = `sp-name${order}`;
    cardName.className = 'sp-name lato-black dark';
    cardName.innerText = data[i].name;
    cardInfo.appendChild(cardName);
    const cardTitle = document.createElement('p');
    cardTitle.id = `sp-title${order}`;
    cardTitle.className = 'sp-title lato red';
    cardTitle.innerText = data[i].title;
    cardInfo.appendChild(cardTitle);
    const cardIndicator = document.createElement('div');
    cardIndicator.className = 'sp-indicator';
    cardInfo.appendChild(cardIndicator);
    const cardBio = document.createElement('p');
    cardBio.id = `sp-bio${order}`;
    cardBio.className = 'sp-bio lato dark';
    cardBio.innerText = data[i].detail;
    cardInfo.appendChild(cardBio);
  }
};

loadInstructor(InstructorsDataBase);
