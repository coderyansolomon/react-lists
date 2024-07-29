import { v4 as uuidv4 } from 'uuid';

const keyPoints2 = [
  {
    id: uuidv4(),
    text: "Rendering lists in React involves using the JavaScript array map() method.",
  },
  {
    id: uuidv4(),
    text: "1) Have an array you want to render list items for (filter if needed). 2) Map over the data creating an li for each item with a key prop. 3) Render the li's in the return statement of a component wrapped in a ol/ul.",
  },
  {
    id: uuidv4(),
    text: "Each item in a list should have a unique 'key' prop on the outer-most element.",
  },
  {
    id: uuidv4(),
    text: "Keys help React identify which items have changed, are added, or are removed. This allows React to correctly update the DOM.",
  },
  {
    id: uuidv4(),
    text: "Keys should not change and should be unique. And it's best to use a key from your data, rather than generating on the fly (e.g. with indexes because those reorder).",
  },
  {
    id: uuidv4(),
    text: "It’s common to extract list rendering logic to a separate component.",
  },
];

const Home = () => {

  const keyPoints = [
    "Rendering lists in React involves using the JavaScript array map() method",
    "1) Have an array you want to render list items for (filter if needed). 2) Map over the data creating an li for each item with a key prop. 3) Render the li's in the return statement of a component wrapped in a ol/ul.",
    "Each item in a list should have a unique 'key' prop on the outer-most element.",
    "Keys help React identify which items have changed, are added, or are removed. This allows React to correctly update the DOM.",
    "Keys should not change and should be unique. And it's best to use a key from your data, rather than generating on the fly (e.g. with indexes because those reorder).",
    "It’s common to extract list rendering logic to a separate component.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center text-white">
      <div className="w-full max-w-3xl">
        <header className="py-8 bg-darkBlue text-react-blue text-center shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Rendering Lists in React.js</h1>
          <p className="text-lg">A guide to effectively rendering lists in React applications.</p>
        </header>
        <main className="p-8">
          <section className="bg-darkBlue p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-react-blue">Key Points:</h2>
            <ul className="list-inside space-y-2">
              {keyPoints.map((point, index) => (
                <li
                  key={index}
                  className={`text-lg p-2 rounded-lg ${
                    index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
                  }`}
                >
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </main>
        <footer className="py-4 bg-darkerBlue text-center text-sm text-react-blue rounded-lg mt-4">
          © 2024 Code Ryan. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
