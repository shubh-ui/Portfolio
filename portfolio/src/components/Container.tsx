const CenteredContainer = ({ children }: any) => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full max-w-5xl px-16 py-8">
        {children}
      </div>
    </div>
  );
};

export default CenteredContainer;