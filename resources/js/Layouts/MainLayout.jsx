function MainLayout({ header, children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {header && (
        <header className="bg-white shadow p-5">
          <div className="container mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 leading-tight">
              {header}
            </h2>
          </div>
        </header>
      )}
      {children}
    </div>
  );
}

export default MainLayout;
