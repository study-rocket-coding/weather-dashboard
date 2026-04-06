function ErrorMessage({ message, onRetry }) {
  return (
    <div className="bg-red-50 border border-red-100 p-10 rounded-4xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
        !
      </div>
      <h3 className="text-xl font-bold text-red-900">
        Oops! Something went wrong
      </h3>
      <p className="text-red-600 font-medium">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-8 py-3 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all hover:shadow-lg active:scale-95"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
