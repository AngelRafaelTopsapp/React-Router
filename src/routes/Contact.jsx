import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen px-4 py-6">
      <h1 className="font-extrabold text-4xl md:text-6xl text-gray-800 mb-8 text-center">
        Página de Contatos
      </h1>
      <div className="space-y-4">
        <p>
          <Link
            to="/contact/1"
            className="text-blue-600 hover:text-blue-800 font-medium text-lg transition duration-200"
          >
            Forma de contato 1
          </Link>
        </p>
        <p>
          <Link
            to="/contact/2"
            className="text-blue-600 hover:text-blue-800 font-medium text-lg transition duration-200"
          >
            Forma de contato 2
          </Link>
        </p>
        <p>
          <Link
            to="/contact/3"
            className="text-blue-600 hover:text-blue-800 font-medium text-lg transition duration-200"
          >
            Forma de contato 3
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
