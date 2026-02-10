const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin" />

        {/* Text */}
        <p className="text-sm text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
