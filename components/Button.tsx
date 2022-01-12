const Button: React.FC = ({ children }) => {
  return (
    <button className="bg-primary-400 hover:bg-primary-500 text-white text-lg font-bold py-3 px-5 rounded-md">
      {children}
    </button>
  )
}

export default Button
