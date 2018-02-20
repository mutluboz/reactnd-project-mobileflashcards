Requirements
**************************************************
Deck oluşturabilmeliyim
Bir deck sonsuz sayıda flashcard içerebilmeli
Flashcard oluşturabilmeliyim.
Flashcardı istediğim decke atayabilmeliyim
Flashcardın ön yüzü 
	soruyu gösteriyor
	arka yüzü cevabı gösteriyor
	
Kullanıcılar belirli bir deck için quiz yapabilmeli.
Quizin sonunda puanını görebilmeli

Kullanıcı o gün çalışmamışsa notification almalı

Views
***************************************************
DeckList
	DeckTitle
	# of cards

Deck
	header section
	*****************
	title of deck
	#of cards
	start quiz
	add new cards
	list of cards in deck ( optional)
	*****************
	
Quiz
	Quiz sorusu göster
	(cevabı gösterme seçeği --> kartı ters çevirecek)
	Correct Button
	Incorrect Button
	# of cards left in the quiz
	% complete of quiz

New Deck
	Enter title of new deck
	Submit title

New Card
	question and answer textboxes
	submit button
	
Technical Requirements
***************************************************
	use asnyc storage for data
	{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
