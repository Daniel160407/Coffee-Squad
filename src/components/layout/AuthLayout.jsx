const AuthLayout = ({ title, children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-900">
      <div className="flex flex-1">
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="w-full max-w-[554px] rounded-2xl bg-gray-800 p-5 shadow-lg">
            <h1 className="mb-5 text-center text-[42px] font-semibold text-white">
              {title}
            </h1>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
