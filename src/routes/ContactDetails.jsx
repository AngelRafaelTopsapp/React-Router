import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleContact = () => {
    alert("Contato enviado!");
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen px-4 py-6">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
        Exibindo mais informações de contato: <span className="text-blue-600">{id}</span>
      </h1>
      <button
        onClick={handleContact}
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
      >
        Enviar contato
      </button>
    </div>
  );
};

export default ContactDetails;
