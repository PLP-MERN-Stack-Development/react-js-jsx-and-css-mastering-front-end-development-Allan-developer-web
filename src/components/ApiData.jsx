import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';

const PAGE_SIZE = 10;

const Spinner = () => (
  <div className="flex justify-center items-center py-8">
    <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  </div>
);

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PAGE_SIZE}`);
        if (!res.ok) throw new Error('Network response was not ok');
        const items = await res.json();
        setData(items);
        setTotal(100); // JSONPlaceholder has 100 posts
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  // Filter data by search
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card title="API Data">
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      {loading && <Spinner />}
      {error && <div className="text-red-600 bg-red-100 dark:bg-red-900 rounded p-3 mb-4">Error: {error}</div>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
        {!loading && !error && filteredData.length === 0 && (
          <li className="col-span-full text-center text-gray-500 dark:text-gray-400 py-8 !list-none">No results found.</li>
        )}
        {filteredData.map(post => (
          <li
            key={post.id}
            className="!list-none border rounded-lg p-4 bg-gray-50 dark:bg-gray-900 transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-400 dark:focus-within:ring-blue-600 outline-none cursor-pointer"
            tabIndex={0}
            aria-label={post.title}
            style={{ animation: 'fadeIn 0.5s' }}
          >
            <h3 className="font-bold mb-2 text-blue-700 dark:text-blue-300 text-lg sm:text-xl transition-colors duration-200">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg transition-colors duration-200">{post.body}</p>
          </li>
        ))}
      </ul>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1 || loading}
        >
          Previous
        </Button>
        <span>Page {page} of {Math.ceil(total / PAGE_SIZE)}</span>
        <Button
          variant="secondary"
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(total / PAGE_SIZE) || loading}
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default ApiData;
