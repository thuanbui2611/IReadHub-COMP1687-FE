import { Book } from "../../app/models/book";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  return (
    <>
      <div className="my-1 px-1 w-auto md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 ">
        {/* <!-- Article --> */}
        <article className="overflow-hidden rounded-lg shadow-lg">
          <a href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={book.image}
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                {book.title}
              </a>
            </h1>
            <p className="text-grey-darker text-sm">14/4/19</p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a
              className="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              {/* img size 32x32 */}
              <img
                alt="Placeholder"
                className="block rounded-full h-8 w-8"
                src={book.image}
              />
              <p className="ml-2 text-sm">{book.title}</p>
            </a>
            <a
              className="no-underline text-grey-darker hover:text-red-dark"
              href="#"
            >
              <span className="hidden">Like</span>
              <i className="fa fa-heart"></i>
            </a>
          </footer>
        </article>
        {/* <!-- END Article --> */}
      </div>
    </>
  );
}
