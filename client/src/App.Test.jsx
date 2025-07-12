export default function App() {
  function handleClick() {
    alert('Tailwind is working, and so is the button!');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Tailwind CSS Test</h1>
        <p className="mb-4 text-gray-700">
          If you see gradients, shadows, and rounded corners — Tailwind is working!
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}
