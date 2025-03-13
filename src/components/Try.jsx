const TestAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-blue-500 text-white p-6 text-center"
    >
      Motion is Working!
    </motion.div>
  );
};

export default TestAnimation;
