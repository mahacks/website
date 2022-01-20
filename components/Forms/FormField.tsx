import React from 'react'

const FormField: React.FC<{
  label: string
  description?: string | React.ReactNode
  required?: boolean
}> = ({ label, description, children, required }) => (
  <label className="flex flex-col gap-3">
    <span className="text-xl font-light">
      {label} {required && <span className="text-red-500 font-bold">*</span>}
    </span>
    {description && (
      <span className="text-sm text-gray-500">{description}</span>
    )}
    {children}
  </label>
)

export default FormField
