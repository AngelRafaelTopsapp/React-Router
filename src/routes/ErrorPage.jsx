import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4 py-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Página não encontrada
        </p>
        <p className="text-gray-600 mb-6">
          A página que você está procurando não existe ou foi movida.
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Voltar para a Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
