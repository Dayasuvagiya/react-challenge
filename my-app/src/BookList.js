import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";

const books = [
  {
    id: 1,
    title: 'Test1',
    description: 'test .....'
  },
  {
    id: 2,
    title: 'Test2',
    description: 'test 2.....'
  },
  {
    id: 3,
    title: 'Test3',
    description: 'test 3.....'
  }
]

function Book({ book, address }){
return (
    <div>
      <p>{book.title}</p>
      <p>{book.description}</p>
      <p>{address}</p>
    </div>
    )
}

function BookList(){
  return (
    <div>
      { books.map((bookl) => (
        <div>
          <Book book={bookl} address="goethe strasse" />
        </div>
      )
      )}
    </div>
  );
}

export default BookList;