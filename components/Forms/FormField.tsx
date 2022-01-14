const FormField: React.FC<{ label: string; description?: string }> = ({
  label,
  description,
  children,
}) => (
  <label className="flex flex-col gap-3">
    <span className="text-xl font-light">{label}</span>
    {description && (
      <span className="text-sm text-gray-500">{description}</span>
    )}
    {children}
  </label>
)

export default FormField
