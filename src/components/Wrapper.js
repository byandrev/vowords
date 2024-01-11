function Wrapper({ children }) {
  return (
    <div className="min-h-[calc(100vh-64px)] max-w-5xl mx-auto w-full px-6">
      {children}
    </div>
  );
}

export default Wrapper;
