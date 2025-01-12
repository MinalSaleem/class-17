import { FormFieldProps } from "../../../types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      className="px-4 py-2 my-2 bg-slate-200 border border-slate-400 focus:outline outline-blue-500"
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="error-message text-red-600 pb-3">{error.message}</span>}
  </>
);
export default FormField;